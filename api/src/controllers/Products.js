const { Product } = require("../db");
const { Op } = require('sequelize');

const createProductDB = async (name, image, description, price, stock, size, material, category) => {

    return await Product.create({name, image, description, price, stock, size, material, category});

};

const getProductById = async (id) => {

    return await Product.findByPk(id);
};

const getAllProducts = async () => {
 
    return await Product.findAll();
};

const getProductByName = async(name) => {

    const userDB = await Product.findAll({where: {name: name}});

return userDB;

    // const userFiltered = await User.filter(user => user.firstName === firstName);
};

// const getProductByName = async(name) => {

//     try {
//       if (name){
//       const product = await Product.findAll({
//         where: { name: { [Op.iLike]: `%${name}%` },
//         }})
//         res.status(200).json(product);
//       } 
//       else {
//         const product = await Product.findAll()
//         res.status(200).json(product);
//       }
//     } catch (error) {
//       res.status(500).json({ error: 'No se encontraron productos con ese nombre.' });
//     }


   
// };

module.exports = {
    createProductDB,
    getProductById,
    getAllProducts,
    getProductByName,
};