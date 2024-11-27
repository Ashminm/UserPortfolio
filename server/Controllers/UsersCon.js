const users = require('../Models/UsersMod')
const jwt=require('jsonwebtoken')

exports. userRegister= async(req,res)=>{
    try{
        const {Gtoken,acno,firstname,lastname,name,email} = req.body
        const existingUser=await users.findOne({Gtoken,acno,name,email})
        if(existingUser){
            res.status(406).json("Already Register!!")
        }else{
            const newUser =new users({Gtoken,acno,firstname,lastname,name,email})
            newUser.save()
            res.status(200).json(newUser)
        }
    }catch(err){
        res.status(401).json(err)
        console.log(err);
        
    }
}

exports.userLogin= async(req,res)=>{
    const {Gtoken,email} = req.body
    const existingUser=await users.findOne({Gtoken,email})
    if(existingUser){
        const token=jwt.sign({userID:existingUser._id},process.env.seacretkey)
        res.status(200).json({token,existingUser,role:'user'})
        console.log(Gtoken);
        
    }else{
        res.status(406).json('your not register this email using. Pleas register!!')
    }
}