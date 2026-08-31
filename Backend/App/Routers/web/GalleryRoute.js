const express = require("express");
const { ImageInsert, GetAllImages, DeleteImage, EditImage, GetSingleImage, DeleteAllImage } = require("../../Controller/web/GalleryController");
const GalleryRouter = express.Router();


GalleryRouter.post("/insert", ImageInsert);
GalleryRouter.get("/view", GetAllImages);
GalleryRouter.get("/single-image/:id", GetSingleImage)
GalleryRouter.put("/edit/:id", EditImage)
GalleryRouter.delete("/delete/:id", DeleteImage)
GalleryRouter.delete("/delete-all", DeleteAllImage)

module.exports = GalleryRouter;