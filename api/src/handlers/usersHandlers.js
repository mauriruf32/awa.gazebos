const { createUserDB, getUserById, getAllUsers, getUserByName } = require("../controllers/Users");

const getUsersHandler = async (req, res) => {
    const { firstName } = req.query;

    try {

    if(firstName) {
        const userByName = await getUserByName(firstName);
        res.status(200).json(userByName);
    } else {
        const response = await getAllUsers();
        res.status(200).json(response);

    }
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const getUserByIdHandler = async (req, res) => {
    const { id } = req.params;

const source = isNaN(id) ? "bdd" : "api"

try {
    const response = await getUserById(id, source);
    res.status(200).json(response);
} catch (error) {
    res.status(400).json({error: error.message});
}

};

const createUserHandler = async (req, res) => {
    const {firstName, email, phoneNumber} = req.body;

    try {
        const response = await createUserDB(firstName, email, phoneNumber);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message});
    }

    // res.status(200).send(`Usuario ${firstName} creado con el email ${email}`);
};


// /:id => params
// query ===> ?name=name&raza=raza
// body ===> infop


module.exports = {
    getUserByIdHandler,
    getUsersHandler,
    createUserHandler,
};