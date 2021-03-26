var express = require("express");
var router = express.Router();

const userController = require("../controllers/userController");
const productController = require("../controllers/productController");
const categoryController = require("../controllers/categoryController");
const productGroupController = require("../controllers/productGroupController");

/* GET users listing. */
router
  .route("/user")
  .post(userController.createUser)
  .get(userController.getAllUsers);
router.get("/user/:id", userController.getUser);

router
  .route("/category")
  .post(categoryController.createCategory)
  .get(categoryController.getAllCategories);
router
  .route("/category/:id")
  .get(categoryController.getCategory)
  .delete(categoryController.deleteCategory);
router
  .route("/productgroup")
  .post(productGroupController.createProductGroup)
  .get(productGroupController.getAllProductGroups);
router
  .route("/productgroup/:id")
  .get(productGroupController.getProductGroup)
  .delete(productGroupController.deleteProductGroup);
router
  .route("/product")
  .post(productController.createProduct)
  .get(productController.getAllProducts);
router
  .route("/product/:id")
  .get(productController.getProduct)
  .delete(productController.deleteProduct);
module.exports = router;
