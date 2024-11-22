const express=require('express')

const userControl = require('../Controllers/UsersCon')

const router=new express.Router()

router.post('/user/register',userControl.userRegister)
router.post('/user/login',userControl.userLogin)

module.exports=router
