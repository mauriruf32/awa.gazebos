const { Router } = require("express");

const productRouter = Router();

const { getProductByIdHandler, getProductsHandler, createProductHandler, deleteProductHandler } = require("../handlers/productsHandlers");

productRouter.get("/", getProductsHandler);

productRouter.get("/:id", getProductByIdHandler);

productRouter.delete("/:id", deleteProductHandler);

productRouter.post("/", createProductHandler);

module.exports = productRouter;