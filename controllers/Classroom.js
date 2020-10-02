class ClassroomController {
	renderClassroom = (req, res) => {
		res.render('main/index.ejs', {layout:false});
	};
}
module.exports = ClassroomController;
