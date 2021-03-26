const ProductGroup = require("../models/productGroupModel");
const factory = require("./handlerFactory");


exports.createProductGroup = factory.createOne(ProductGroup);
exports.getAllProductGroups = factory.getAll(ProductGroup,'products');
exports.getProductGroup = factory.getOne(ProductGroup);
exports.deleteProductGroup = factory.deleteOne(ProductGroup);