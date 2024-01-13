const { Router } = require("express");

const { createPostHandler } = require("../handlers/postsHandlers")

const postRouter = Router();

postRouter.post("/", createPostHandler);


module.exports = postRouter;