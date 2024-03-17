const { Images } = require("../db.js");

const postImages = async (req, res) => {
  const { url, name } = req.body;
  try {
    const newImage = await Images.create({
      url,
      name
    });

    res.status(201).json(newImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la imagennnnnnnnnnn.' }); // Mensaje de error más descriptivo
  }
};

//   const getAllImages = async () => {
 
//     return await Images.findAll();
// };



const getAllImages = async (req, res) => {
    try {
      const images = await Images.findAll();
      res.status(200).json(images);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las imagenes de los productos.' });
    }
  };


  module.exports = { postImages, getAllImages }