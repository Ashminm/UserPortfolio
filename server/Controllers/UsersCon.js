const users = require('../Models/UsersMod')

exports. userRegister= async(req,res)=>{
    try{
        const {token,acno,firstname,lastname,name,email} = req.body
        const existingUser=await users.findOne({token,acno,name,email})
        if(existingUser){
            res.status(406).json("Already Register!!")
        }else{
            const newUser =new users({token,acno,firstname,lastname,name,email})
            newUser.save()
            res.status(200).json(newUser)
        }
    }catch(err){
        res.status(401).json(err)
        console.log(err);
        
    }
}

exports.userLogin= async(req,res)=>{
    const {token,email} = req.body
    const existingUser=await users.findOne({token,email})
    if(existingUser){
        res.status(200).json(existingUser)
        console.log(token);
        
    }else{
        res.status(406).json('your not register this email using. Pleas register!!')
    }
}