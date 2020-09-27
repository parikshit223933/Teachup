const express=require('express')
const router=express.Router();
const MenuController = new (require('../controllers/MenuController'))();

router.get('/contact-us', MenuController.contactUs);
router.get('/help', MenuController.help);
router.get('/faqs', MenuController.faqs);

module.exports=router;