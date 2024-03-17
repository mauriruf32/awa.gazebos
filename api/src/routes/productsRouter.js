const { Router } = require("express");

const productRouter = Router();

const { getProductByIdHandler, getProductsHandler, createProductHandler, deleteProductHandler } = require("../handlers/productsHandlers");
const { PutProducts } = require("../controllers/PutProducts");


productRouter.get("/", getProductsHandler);

productRouter.get("/:id", getProductByIdHandler);

productRouter.delete("/:id", deleteProductHandler);

productRouter.put("/edit/:id", PutProducts);

productRouter.post("/", createProductHandler);


module.exports = productRouter;