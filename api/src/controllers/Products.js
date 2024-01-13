const { Product } = require("../db");

const createProductDB = async (name, image, description, price, stock, size, material, category) => {

    return await Product.create({name, image, description, price, stock, size, material, category});

     
};

module.exports = {
    createProductDB,
};