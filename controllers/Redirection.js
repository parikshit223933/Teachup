class Redirection {
	// TO RENDER THE SIGN IN AND SIGN UP CHOICE PAGES
	signIn = (req, res) => {
		res.render('authentication/sign-in');
	};
	signUp = (req, res) => {
		res.render('authentication/sign-up');
	};
	// TO RENDER SIGN IN AND SIGN UP PAGES (THE ONES WHICH CONTAIN FORMS)
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

module.exports = Redirection;
