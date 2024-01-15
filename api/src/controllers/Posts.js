const { Post } = require("../db");

const createPost = async (score, description, userId, productId) => {

    const post = await Post.create({score, description});

    await post.setUser(userId);

    await post.setProduct(productId);

    return post;
};

module.exports = { createPost };