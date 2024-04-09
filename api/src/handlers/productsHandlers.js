const { createProductDB, getProductById, getAllProducts, getProductByName, deleteProduct } = require("../controllers/Products");

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
    image, // Cambiado de `image` a `images`
    description,
    price,
    stock,
    color,
    size,
    material,
    materialTela,
    category,
    images,
  } = req.body;

  try {
    const response = await createProductDB(name, image, description, price, stock, color, size, material, materialTela, category, images);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const deleteProductHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await deleteProduct(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({error: error.message});
  }

    // res.status(200).send(`Detalle del producto ${id}`);
};

// const productImageHandler = async (req, res) => {

//   try {
//       const { url } = req.body;

//       if (typeof url !== 'string') {
//           throw new Error('URL must be a string');
//       }

//       const productImage = await createProductImage(url);

      
//       res.status(201).json(productImage);
//   } catch (error) {
      
//       console.error(error);
//       res.status(500).json({ error: error.message });
//   }
// };



module.exports = {
    getProductByIdHandler,
    getProductsHandler,
    createProductHandler,
    deleteProductHandler,
};
