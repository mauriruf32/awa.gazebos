const createPostHandler = (req, res) => {
    res.status(200).send("Crear post");
};


module.exports = { createPostHandler };