var createError = require("http-errors");
var express = require("express");
var path = require("path");
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
var cookieParser = require("cookie-parser");
const session = require('express-session');
var logger = require("morgan");
const cors = require('cors');
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");

const userRoutes = require('./routes/users');

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(mongoSanitize());
app.use(xss());
app.use(cors());
app.options("*", cors());

app.use(logger("dev"));

app.use("/api/", userRoutes);


// error handler
app.use("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
