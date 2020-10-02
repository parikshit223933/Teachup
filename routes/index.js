const express = require('express');
const router = express.Router();
const menu = require('./menu');
const auth = require('./auth');
const classroom = require('./classroom');

const HomeController = new (require('../controllers/HomeController'))();

router.get('/', HomeController.homePage);
router.use('/menu', menu);
router.use('/auth', auth);
router.use('/classroom', classroom);

module.exports = router;
