class Authentication {
	signIn = (req, res) => {
		res.render('authentication/sign-in');
	};
	signUp = (req, res) => {
		res.render('authentication/sign-up');
	};
}
module.exports = Authentication;
