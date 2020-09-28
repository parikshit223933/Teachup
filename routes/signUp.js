const express = require('express');
const router = express.Router();
const authentication = new (require('../controllers/Authentication'))();

router.get('/', authentication.signUp);
router.get('/student', authentication.StudentSignUp);
router.get('/teacher', authentication.teacherSignUp);

module.exports = router;
