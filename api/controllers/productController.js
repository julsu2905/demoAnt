const Product = require("../models/productModel");
const factory = require("./handlerFactory");


exports.createUser = factory.createOne(Product);
exports.getAllUsers = factory.getAll(Product);
exports.getUser = factory.getOne(Product);