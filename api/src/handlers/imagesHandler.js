const { getAllImages } = require("../controllers/PostImages");
const { getProductById } = require("../controllers/getProductById");


const getImagesHandler = async (req, res) => {
    const { id } = req.params;
  
    try {
  
    if(id) {
        const productById = await getProductById(id);
        res.status(200).json(productById);
    } else {
        const response = await getAllImages();
        res.status(200).json(response);
  
    }
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
  };

  module.exports = { getImagesHandler }