const { Router } = require("express");

const { getUserByIdHandler, getUsersHandler, createUserHandler, deleteUserHandler } = require("../handlers/usersHandlers");
const { PutUser } = require("../controllers/PutUsers");

const usersRouter = Router();

usersRouter.get("/", getUsersHandler);

usersRouter.get("/:id", getUserByIdHandler);

usersRouter.post("/", createUserHandler);

usersRouter.put("/edit/:id", PutUser);

usersRouter.delete("/:id", deleteUserHandler);


module.exports = usersRouter;
