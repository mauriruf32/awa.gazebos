const { Product } = require("../db");

const createProductDB = async (name, image, description, price, stock, size, material, category) => {

    return await Product.create({name, image, description, price, stock, size, material, category});

     
};

const getProductById = async (id) => {

 return await Product.findByPk(id);
    
    
};

const getAllProducts = async () => {
 
    return await Product.findAll();
};

module.exports = {
    createProductDB,
    getProductById,
    getAllProducts,
};