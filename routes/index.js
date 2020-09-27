const express = require('express');
const router = express.Router();
const menu = require('./menu');

const HomeController = new (require('../controllers/HomeController'))();

router.get('/', HomeController.homePage);
router.use('/menu', menu);

module.exports = router;
