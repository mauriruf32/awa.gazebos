const { createProductDB } = require("../controllers/Products");

const getProductsHandler = (req, res) => {
    res.status(200).send("Todos los productos");
};

const getProductByIdHandler = (req, res) => {
const { id } = req.params

    res.status(200).send(`Detalle del producto ${id}`);
};

const createProductHandler = async (req, res) => {
    const {
        name,
        image,
        description,
        price,
        stock,
        size,
        material,
        category,
      } = req.body;

      try {
        const response = await createProductDB(name, image, description, price, stock, size, material, category);
        res.status(200).json(response)
      } catch (error) {
        res.status(400).json({error: error.message});
      }


    res.status(200).send("Producto creado");
};

module.exports = {
    getProductByIdHandler,
    getProductsHandler,
    createProductHandler,
};