class Authentication {
	signIn = (req, res) => {
		res.render('authentication/sign-in');
	};
	signUp = (req, res) => {
		res.render('authentication/sign-up');
	};

	teacherSignUp = (req, res) => {
		res.render('authentication/sign-up/teacher');
	};
	StudentSignUp = (req, res) => {
		res.render('authentication/sign-up/student');
	};
	teacherSignIn = (req, res) => {
		res.render('authentication/sign-in/teacher');
	};
	StudentSignIn = (req, res) => {
		res.render('authentication/sign-in/student');
	};
}
module.exports = Authentication;
