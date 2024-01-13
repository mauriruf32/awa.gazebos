const { Router } = require("express");

const productRouter = Router();

const { getProductByIdHandler, getProductsHandler, createProductHandler } = require("../handlers/productsHandlers")

productRouter.get("/", getProductsHandler);

productRouter.get("/:id", getProductByIdHandler);

productRouter.post("/", createProductHandler);

module.exports = productRouter;