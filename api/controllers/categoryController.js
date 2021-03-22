const Category = require("../models/categoryModel");
const factory = require("./handlerFactory");


exports.createCategory = factory.createOne(Category);
exports.getAllCategories = factory.getAll(Category,'Product');
exports.getCategory = factory.getOne(Category);
exports.deleteCategory = factory.deleteOne(Category);