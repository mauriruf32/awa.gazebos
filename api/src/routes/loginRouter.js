const { Router } = require("express");

const { postLogin } = require("../controllers/PostLogin.js");

const loginRouter = Router();



loginRouter.get("/", postLogin);

module.exports = loginRouter;