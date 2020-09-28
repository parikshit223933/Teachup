const express = require('express');
const router = express.Router();
const authentication = new (require('../controllers/Authentication'))();

router.get('/sign-in', authentication.signIn);
router.get('/sign-up', authentication.signUp);

module.exports = router;
