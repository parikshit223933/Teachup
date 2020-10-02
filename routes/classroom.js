const express = require('express');
const router=express.Router();
const ClassroomController=new (require('../controllers/Classroom'))()

router.get('/:classroom_id', ClassroomController.renderClassroom    )

module.exports = router;    
