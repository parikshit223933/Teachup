class Authentication {
	// FOR SIGN UP
	signUp = (req, res) => {
        console.log(req.body);
		res.redirect('back');
	};

	//FOR SIGN IN
	signIn = (req, res) => {
		res.redirect('back')
	};
}

module.exports = Authentication;
