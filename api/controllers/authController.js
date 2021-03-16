const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

//Get information token from env
const signToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_IN,
	});
};

//Create and send token

const createSendToken = (user, statusCode, res) => {
	const token = signToken(user._id);
	const cookieOptions = {
		expires: new Date(
			Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
		),
		httpOnly: true,
	};
	res.cookie("jwt", token, cookieOptions);

	// Remove password from output
	user.password = undefined;

	res.status(statusCode).json({
		status: "success",
		token,
		data: {
			user,
		},
	});
};

//logout

exports.logout = (req, res) => {
	res.cookie("jwt", "loggedout", {
		expires: new Date(Date.now() + 10 * 1000),
		httpOnly: true,
	});
	res.status(200).json({
		status: "success",
		user: null,
	});
};

//Login
exports.login = catchAsync(async (req, res, next) => {
	const { email, password } = req.body;
	//check if email & password exists
	if (!email || !password) {
		return next(new AppError("Please provide email and password!", 400));
	}
	//2) check if user exist and passowrd is correct
	const user = await User.findOne({ email }).select("+password");
	if (!user || !(await user.correctPassword(password, user.password))) {
		return next(
			new AppError("Incorrect email or password , please try again", 401)
		);
	}
	//3) If everything Ok

	createSendToken(user, 200, res);
});

//Protect if user not login do not permiss access
//exports.protectUser = factory.protect(User);
exports.isLoggedIn = async (req, res, next) => {
	if (req.cookies.jwt) {
		try {
			// 1) verify token
			const decoded = await promisify(jwt.verify)(
				req.cookies.jwt,
				process.env.JWT_SECRET
			);

			// 2) Check if user still exists
			const currentUser = await User.findById(decoded.id);
			if (!currentUser) {
				return next();
			}

			// THERE IS A LOGGED IN USER
			req.user = currentUser;
			res.locals.user = currentUser;
			return next();
		} catch (err) {
			//return next();
			return next();
		}
	} else {
		try {
			req.user = null;
			res.locals.user = null;
		} catch (err) {
			console.log(err);
		}
	}
	//res.redirect('/admin');
	next();
};

exports.protectUser = factory.protect(User);

//Allow user for access route
exports.restrictTo = (...roles) => {
	return (req, res, next) => {
		const role = req.user.role;
		console.log(role);
		if (!roles.includes(req.user.role)) {
			return next(new AppError("Action restricted", 403));
		}
		next();
	};
};
