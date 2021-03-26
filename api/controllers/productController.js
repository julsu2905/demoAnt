const Product = require("../models/productModel");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const ProductGroup = require("../models/productGroupModel");

exports.createProduct = catchAsync(async (req, res, next) => {
  const photo = req.files.photo[0].filename;
  const doc = await Product.create({
    name: req.body.name,
    price: req.body.price,
    currency: req.body.currency,
    description: req.body.description,
    color: req.body.color,
    size: req.body.size,
    productGroup: req.body.productGroup,
    variants: req.body.variants,
    photo : photo
     
  });

  await ProductGroup.findByIdAndUpdate(req.body.productGroup, {
    $addToSet: {
      products: doc.id,
    },
  });
  await ProductGroup.findByIdAndUpdate("605d4ee84704780768c04bbd", {
    $addToSet: {
      products: doc.id,
    },
  });
  res.status(200).json({
    status: "success",
    data: doc,
  });
});
exports.getAllProducts = factory.getAll(Product);
exports.getProduct = factory.getOne(Product);
exports.deleteProduct = factory.deleteOne(Product);
