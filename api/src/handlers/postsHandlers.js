const { createPost } = require("../controllers/Posts");

const createPostHandler = async (req, res) => {
const { score, description, userId, productId } = req.body;

try {
    const newPost = await createPost(score, description, userId, productId);
    res.status(200).json(newPost);
} catch (error) {
    res.status(400).json({error: error.message});
}
};


module.exports = { createPostHandler };