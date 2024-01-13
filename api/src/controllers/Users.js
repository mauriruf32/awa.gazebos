const { User } = require("../db");

const createUserDB = async (firstName, email, phoneNumber) => {

    return await User.create({firstName, email, phoneNumber});

     
};

module.exports = {
    createUserDB,
};