const express = require('express');
const router = express.Router();
const redirection = new (require('../controllers/Redirection'))();
const authentication = new (require('../controllers/Authentication'))();

router.get('/', redirection.signUp);
router.get('/student', redirection.StudentSignUp);
router.get('/teacher', redirection.teacherSignUp);

router.post('/authenticate-user', authentication.signUp);

module.exports = router;
