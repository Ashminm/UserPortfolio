const users = require('../Models/UsersMod')
const jwt=require('jsonwebtoken')

exports. userRegister= async(req,res)=>{
    try{
        const {acno,firstname,lastname,name,email} = req.body
        const existingUser=await users.findOne({firstname,lastname,name,email})
        if(existingUser){
            res.status(406).json("Already Register!!")
        }else{
            const newUser =new users({acno,firstname,lastname,name,email})
            newUser.save()
            res.status(200).json(newUser)    
        }
    }catch(err){
        res.status(401).json(err)
        console.log(err); 
        
    }
}

exports.userLogin= async(req,res)=>{
    const {acno,email,name} = req.body
    const existingUser=await users.findOne({acno,email,name})
    if(existingUser){
        const token=jwt.sign({userID:existingUser._id},process.env.seacretkey)
        res.status(200).json({token,existingUser,role:'user'})
        console.log("Result Login:",token,existingUser);   
    }else{
        res.status(406).json('your not register this email using. Pleas register!!')
    }
}