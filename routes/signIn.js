const express = require('express');
const router = express.Router();
const authentication = new (require('../controllers/Authentication'))();

router.get('/', authentication.signIn);
router.get('/student', authentication.StudentSignIn);
router.get('/teacher', authentication.teacherSignIn);

module.exports = router;
