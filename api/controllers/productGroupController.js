const ProductGroup = require("../models/productGroupModel");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const Category = require("../models/categoryModel");

exports.createProductGroup = catchAsync(async (req, res, next) => {
  const doc = await ProductGroup.create({
    name: req.body.name,
    category: req.body.category,
    products: req.body.products,
  });
  const cate = await Category.findByIdAndUpdate(req.body.category, {
    $addToSet: {
      productGroups: doc.id,
    },
  });
  res.status(200).json({
    status: "success",
    data: doc,
  });
});
exports.getAllProductGroups = factory.getAll(ProductGroup, "products");
exports.getProductGroup = factory.getOne(ProductGroup);
exports.deleteProductGroup = factory.deleteOne(ProductGroup);
