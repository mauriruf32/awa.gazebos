const { createUserDB, getUserById } = require("../controllers/Users");

const getUsersHandler = (req, res) => {
const { firstName } = req.query;
    if(firstName) res.status(200).send(`Usuario con nombre ${firstName}`);
    res.status(200).send(`Todos los usuarios`);
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

    res.status(200).send(`Usuario ${firstName} creado con el email ${email}`);
};


// /:id => params
// query ===> ?name=name&raza=raza
// body ===> infop


module.exports = {
    getUserByIdHandler,
    getUsersHandler,
    createUserHandler,
};