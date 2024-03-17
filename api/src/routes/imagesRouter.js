const { Router } = require("express");

const { postImages, getAllImages } = require("../controllers/PostImages");

const imagesRouter = Router();

imagesRouter.get("/", getAllImages);


imagesRouter.post("/", postImages);

module.exports = imagesRouter;