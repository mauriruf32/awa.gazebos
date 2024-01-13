const { Router } = require("express");

const { getUserByIdHandler, getUsersHandler, createUserHandler } = require("../handlers/usersHandlers")

const usersRouter = Router();

usersRouter.get("/", getUsersHandler);

usersRouter.get("/:id", getUserByIdHandler);

usersRouter.post("/", createUserHandler);

module.exports = usersRouter;
