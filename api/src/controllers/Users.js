const { User } = require("../db");
const { Op } = require('sequelize');


const createUserDB = async (firstName, lastName, birthDate, phoneNumber, email, password) => {

    return await User.create({firstName, lastName, birthDate, phoneNumber, email, password});
};

const getUserById = async(id) => {

    const userDB = await User.findByPk(id);

return userDB;

};

const getAllUsers = async () => {
    
    return await User.findAll();

};

const getUserByName = async(name) => {

    const userDB = await User.findAll({
        where: { firstName: { [Op.iLike]: `%${name}%` },
        }});

return userDB;

    // const userFiltered = await User.filter(user => user.firstName === firstName);
};

module.exports = {
    createUserDB,
    getUserById,
    getAllUsers,
    getUserByName,
};