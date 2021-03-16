var express = require('express');
var router = express.Router();
const multer = require('multer');
let path = require('path');
const userController = require('../controllers/userController');

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
router.post('/user',)
});


module.exports = router;
