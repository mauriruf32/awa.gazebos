const { Router } = require("express");

const productRouter = Router();

const { getProductByIdHandler, getProductsHandler, createProductHandler, deleteProductHandler, updateProductHandler } = require("../handlers/productsHandlers");

productRouter.get("/", getProductsHandler);

productRouter.get("/:id", getProductByIdHandler);

productRouter.delete("/:id", deleteProductHandler);

productRouter.put("/edit/:id", updateProductHandler);

productRouter.post("/", createProductHandler);

module.exports = productRouter;