const Category = require("../models/categoryModel");
const factory = require("./handlerFactory");


exports.createCategory = factory.createOne(Category);
exports.getAllCategories = factory.getAll(Category);
exports.getCategory = factory.getOne(Category);