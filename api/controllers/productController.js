const Product = require("../models/productModel");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const fs = require("fs");
const Category = require("../models/categoryModel");

exports.createProduct = catchAsync(async (req, res, next) => {
  const doc = await Product.create({
    name: req.body.name,
    price: req.body.price,
    currency: req.body.currency,
    description: req.body.description,
    photo: req.body.photo,
  });
  await Product.findByIdAndUpdate(doc.id, {
    $addToSet: {
      categories: req.body.categories,
      variants: req.body.variants,
    },
  });
  const arrayCategories = req.body.categories;
  arrayCategories.forEach(async category =>{
    await Category.findByIdAndUpdate(category,{
        $addToSet :{
            products : doc.id
        }
    });
  });
  res.status(200).json({
    status: "success",
    data: doc,
  });
});
exports.getAllProducts = factory.getAll(Product);
exports.getProduct = factory.getOne(Product);
exports.deleteProduct = factory.deleteOne(Product);
