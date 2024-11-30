const express=require('express')

const multerConfig=require('../MulterConfig/Multer')
const middilewares=require('../Middileware/JWT')

const userControl = require('../Controllers/UsersCon')
const profileControl= require('../Controllers/ProfileCon')
const aboutControl=require('../Controllers/AboutCon')
const languageControl=require('../Controllers/LanguageCon')
const currentControl=require('../Controllers/CurrentCon')
const expeControll=require('../Controllers/ExpeCon')
const skillControll=require('../Controllers/SkillCon')
const recentWorkControll=require('../Controllers/RecentWorkCon')

const router=new express.Router()

router.post('/user/register',userControl.userRegister)
router.post('/user/login',userControl.userLogin)

router.post('/add-profile',middilewares,multerConfig.fields([{name:'profileimg',maxCount:1},{name:'resume',maxCount:1}]),profileControl.addProfile)
router.get('/get-profile',middilewares,profileControl.getProfile)
router.delete('/remove-profile',middilewares,profileControl.removeProfile)

router.post('/add-about',middilewares,multerConfig.fields([{name:'aboutimg',maxCount:1}]),aboutControl.addAbout)
router.get('/get-about',middilewares,aboutControl.getAbout)
router.get('/get-about-one',middilewares,aboutControl.getAboutOne)

router.post('/add-lang',middilewares,languageControl.addLanguage)
router.get('/get-lang',middilewares,languageControl.getLanguage)

router.post('/add-current',middilewares,currentControl.addCurrent)
router.get('/get-current',middilewares,currentControl.getCurrent)
router.get('/get-current-one',middilewares,currentControl.getCurrentOne)

router.post('/add-experiance',middilewares,expeControll.addExpe)
router.get('/get-experiance',middilewares,expeControll.getExpe)

router.post('/add-skill',middilewares,skillControll.addSkills)
router.get('/get-skills',middilewares,skillControll.getSkills)

router.post('/add-work',middilewares,multerConfig.fields([{name:'projectimg',maxCount:1}]),recentWorkControll.addRecent)
router.get('/get-work',middilewares,recentWorkControll.getWork)
router.delete('/remove-work',middilewares,recentWorkControll.deleteWork)



module.exports=router
