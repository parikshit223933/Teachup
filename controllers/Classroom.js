class ClassroomController {
	renderClassroom = (req, res) => {
		res.render('main', {layout:false});
	};
}
module.exports = ClassroomController;
