const { ShoppingCart, Cart_Product, Product } = require("../db");
const { Op } = require("sequelize");

const addOneToCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    if (!userId || !productId)
      return res.status(401).json({ error: "Faltan Datos" });

    const cartUser = await ShoppingCart.findOne({
      where: { UserId: userId },
    });

    const product = await Product.findByPk(productId);
    if (product.stock === 0){
      return res.status(201).json({ message: "No hay stock del producto" });
    }

    //var newStock = product.stock - 1;

    var total = parseFloat(cartUser.total) + parseFloat(product.price);

    /*await Product.update(
      { stock: newStock },
      {
        where: {
          id: product.id,
        },
      }
    );*/

/*
1-
*/

    var cart_prod2 = await Cart_Product.findOne({
      where: {
        [Op.and]: [{ ShoppingCartId: cartUser.id }, { ProductId: productId }],
      },
    })

    if (cart_prod2 && cart_prod2.cantidad >= product.stock){
      //return throw new Error ('No hay suficiente stock');
      console.log("No hay suficiente stock 2");
      return res.status(201).json({message: 'No hay suficiente stock'})
    }

    let [cart_prod, created] = await Cart_Product.findOrCreate({
      where: {
        [Op.and]: [{ ShoppingCartId: cartUser.id }, { ProductId: productId }],
      },
      defaults: {
        cantidad: 1,
        subtotal: product.price,
        ShoppingCartId: cartUser.id,
        ProductId: productId,
      },
    });

    // if (cart_prod.cantidad > product.stock){
    //   //return throw new Error ('No hay suficiente stock');
    //   console.log("No hay suficiente stock 1");
    //   return res.status(205).json({message: 'No hay suficiente stock'})
    // }

    if (!created) {
      var cant = parseInt(cart_prod.cantidad) + 1;
      var subt = parseFloat(cart_prod.subtotal) + parseFloat(product.price);

      await Cart_Product.update(
        {
          ShoppingCartId: cartUser.id,
          ProductId: productId,
          cantidad: cant,
          subtotal: subt,
        },
        {
          where: {
            [Op.and]: [
              { ShoppingCartId: cartUser.id },
              { ProductId: productId },
            ],
          },
        }
      );
    }

    await ShoppingCart.update(
      { total: total },
      {
        where: {
          id: cartUser.id,
        },
      }
    );
    return res.status(200).json("Carrito Actualizado");
  } catch (error) {
    console.log(error.message);
    console.log(error.stack);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = addOneToCart;