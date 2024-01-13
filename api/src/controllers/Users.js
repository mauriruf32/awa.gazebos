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

module.exports = {
    createUserDB,
    getUserById,
};