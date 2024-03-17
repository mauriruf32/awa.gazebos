const { Router } = require("express");
const usersRouter = require("./usersRouter");
const postRouter = require("./postsRouter");
const productRouter = require("./productsRouter");
const imagesRouter = require("./imagesRouter");

const mainRouter = Router();

mainRouter.use("/users", usersRouter);

mainRouter.use("/posts", postRouter);

mainRouter.use("/products", productRouter);

mainRouter.use("/images", imagesRouter);

// mainRouter.get("/products", (req, res) => {
//     res.status(200).send("Todos los productos");
// });

// mainRouter.get("/products/:id", (req, res) => {
//     res.status(200).send("Detalle de producto");
// });

// mainRouter.post("/products", (req, res) => {
//     res.status(200).send("Crear producto");
// });

// mainRouter.get("/users", (req, res) => {
//     res.status(200).send("Todos los usuarios");
// });

// mainRouter.get("/users/:id", (req, res) => {
//     res.status(200).send("Detalle de usuario");
// });

// mainRouter.post("/users", (req, res) => {
//     res.status(200).send("Crear usuario");
// });



module.exports = mainRouter;