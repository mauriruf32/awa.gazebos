const { User } = require("../db");
const axios = require(`axios`);

const createUserDB = async (firstName, email, phoneNumber) => {

    return await User.create({firstName, email, phoneNumber});
};

const getUserById = async(id, source) => {

    const user = source === "api" 
        ? (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`))
            .data 
        : await User.findByPk(id);

return user;

};

const getAllUsers = async () => {
    const usersDB = await User.findAll();

return usersDB;

};

const getUserByName = async(name) => {

    const userDB = await User.findAll({where: {firstName: name}});

return userDB;

    // const userFiltered = await User.filter(user => user.firstName === firstName);
};

module.exports = {
    createUserDB,
    getUserById,
    getAllUsers,
    getUserByName,
};