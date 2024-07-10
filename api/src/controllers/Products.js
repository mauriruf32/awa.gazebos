const { Product, Images } = require("../db");
const { Op } = require('sequelize');

const createProductDB = async (name, image, description, price, stock, color, size, material, materialTela, marca, impermeable, ajustable, peso, category, images) => {
    // Aquí se crea el producto con el atributo `images` en lugar de `image`
    return await Product.create({ name, image, description, price, stock, color, size, material, materialTela, marca, impermeable, ajustable, peso, category, images });
};


const getProductById = async (id) => {
   
    const product = await Product.findByPk(id);


  
    return product;
};

const deleteProduct = async (id) => {
    try {
      const deletedRows = await Product.destroy({
        where: {
          id: id,
        },
      });
  
      if (deletedRows === 0) {
        throw new Error("Product not found");
      }
  
      return { message: "Product deleted successfully" };
    } catch (error) {
      throw new Error(error.message);
    }
  };

const getAllProducts = async () => {
 
    return await Product.findAll({
      include: Images,
    });
};

const getProductByName = async (name) => {

    const userDB = await Product.findAll({
                where: { name: { [Op.iLike]: `%${name}%` },
                }});

    return userDB;

};




module.exports = {
  createProductDB,
  getProductById,
  getAllProducts,
  getProductByName,
  deleteProduct,

};