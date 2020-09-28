const express = require('express');
const router = express.Router();
const signIn=require('./signIn');
const signUp=require('./signUp');

router.use('/sign-in', signIn);
router.use('/sign-up', signUp);

module.exports = router;
