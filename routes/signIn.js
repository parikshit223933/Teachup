const express = require('express');
const router = express.Router();
const redirection = new (require('../controllers/Redirection'))();
const authentication = new (require('../controllers/Authentication'))();

router.get('/', redirection.signIn);
router.get('/student', redirection.StudentSignIn);
router.get('/teacher', redirection.teacherSignIn);

router.post('/authenticate-user', authentication.signIn);

module.exports = router;
