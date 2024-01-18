const { createProductDB, getProductById, getAllProducts, getProductByName } = require("../controllers/Products");

const getProductsHandler = async (req, res) => {
  const { name } = req.query;

  try {

  if(name) {
      const userByName = await getProductByName(name);
      res.status(200).json(userByName);
  } else {
      const response = await getAllProducts();
      res.status(200).json(response);

  }
      
  } catch (error) {
      res.status(400).json({error: error.message});
  }
};

const getProductByIdHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await getProductById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({error: error.message});
  }

    // res.status(200).send(`Detalle del producto ${id}`);
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


    // res.status(200).send("Producto creado");
};

module.exports = {
    getProductByIdHandler,
    getProductsHandler,
    createProductHandler,
};