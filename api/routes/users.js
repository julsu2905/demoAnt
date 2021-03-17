var express = require('express');
var router = express.Router();
const multer = require('multer');
let path = require('path');
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const categoryController = require('../controllers/categoryController');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, path.join(`${__dirname}/public/images`));
  },
  filename: function(req, file, cb) {   
      cb(null, req.body.filename + '-' + Date.now() + path.extname(file.originalname));
  }
});
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
  } else {
      cb(null, false);
  }
}
let upload = multer({ storage, fileFilter });

/* GET users listing. */
router.route('/user')
      .post(upload.single('photo'),userController.createUser)
      .get(userController.getAllUsers);
router.get('/user/:id',userController.getUser);

router.route('/category')
      .post(upload.single('photo'),categoryController.createCategory)
      .get(categoryController.getAllCategories);
router.get('/category/:id',categoryController.getCategory);

module.exports = router;
