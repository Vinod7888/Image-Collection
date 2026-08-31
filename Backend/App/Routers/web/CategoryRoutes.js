const express = require('express');
const { InsertCategory, GetAllCategory, GetSingleCategory, UpdateCategory, DeleteCategory, GetCategoriesForCollections } = require('../../Controller/web/CategoryController');
const categoryRouter = express.Router();

categoryRouter.post("/insert", InsertCategory);
categoryRouter.get("/view", GetAllCategory);
categoryRouter.get("/view/:id", GetSingleCategory);
categoryRouter.put("/edit/:id", UpdateCategory);
categoryRouter.delete("/delete/:id", DeleteCategory);
categoryRouter.get("/collections", GetCategoriesForCollections);

module.exports = categoryRouter;