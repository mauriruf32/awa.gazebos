const { createUserDB, getUserById, getAllUsers, getUserByName, deleteUser } = require("../controllers/Users");

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


try {
    const response = await getUserById(id);
    res.status(200).json(response);
} catch (error) {
    res.status(400).json({error: error.message});
}

};

const createUserHandler = async (req, res) => {
    const {firstName, lastName, birthDate, phoneNumber, email, password} = req.body;

    try {
        const response = await createUserDB(firstName, lastName, birthDate, phoneNumber, email, password);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message});
    }

    // res.status(200).send(`Usuario ${firstName} creado con el email ${email}`);
};

const deleteUserHandler = async (req, res) => {
    const { id } = req.params;
  
    try {
      const response = await deleteUser(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  
      // res.status(200).send(`Detalle del producto ${id}`);
  };
  

// /:id => params
// query ===> ?name=name&raza=raza
// body ===> infop


module.exports = {
    getUserByIdHandler,
    getUsersHandler,
    createUserHandler,
    deleteUserHandler,
};