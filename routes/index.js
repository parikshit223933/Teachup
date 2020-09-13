const express=require('express');
const router=express.Router();
const HomeController=new (require('../controllers/HomeController'))();

router.get('/', HomeController.homePage)

module.exports=router