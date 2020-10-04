const User = require('../models/User');
const crypto = require('crypto');

class Authentication {
	// FOR SIGN UP
	signUp = async (req, res) => {
		// User.uploadedAvatar(req, res, function (error) {
		// 	console.log(req.body);
		// 	console.log(req.file);
        // });
        res.redirect('back');
	};

	//FOR SIGN IN
	signIn = (req, res) => {
		res.redirect('back');
	};
}

module.exports = Authentication;
