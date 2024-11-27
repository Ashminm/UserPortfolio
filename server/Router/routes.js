const express=require('express')

const multerConfig=require('../MulterConfig/Multer')
const middilewares=require('../Middileware/JWT')

const userControl = require('../Controllers/UsersCon')
const profileControl= require('../Controllers/ProfileCon')
const aboutControl=require('../Controllers/AboutCon')
const languageControl=require('../Controllers/LanguageCon')

const router=new express.Router()

router.post('/user/register',userControl.userRegister)
router.post('/user/login',userControl.userLogin)

router.post('/add-profile',middilewares,multerConfig.fields([{name:'profileimg',maxCount:1},{name:'resume',maxCount:1}]),profileControl.addProfile)
router.get('/get-profile',middilewares,profileControl.getProfile)

router.post('/add-about',middilewares,multerConfig.fields([{name:'aboutimg',maxCount:1}]),aboutControl.addAbout)
router.get('/get-about',middilewares,aboutControl.getAbout)

router.post('/add-lang',middilewares,languageControl.addLanguage)


module.exports=router
