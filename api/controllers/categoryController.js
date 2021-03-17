const Category = require("../models/categoryModel");
const factory = require("./handlerFactory");


exports.createUser = factory.createOne(Category);
exports.getAllUsers = factory.getAll(Category);
exports.getUser = factory.getOne(Category);