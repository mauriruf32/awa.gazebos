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
};