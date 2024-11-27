const profiles=require('../Models/ProfileMod')

exports.addProfile=async(req,res)=>{
   try{ 
    const {name,position,about} = req.body

    if (!req.files || !req.files.profileimg || !req.files.profileimg[0] || !req.files.resume || !req.files.resume[0]) {
         return res.status(400).json("Missing files"); }
    const userID=req.payload
    const profileimg=req.files.profileimg[0].filename
    const resume=req.files.resume[0].filename
    const existingProfile = await profiles.findOne({name,position,about,userID})
    if(existingProfile){
        res.status(406).json("Already exist details")
    }else{
        const newProfile=new profiles({profileimg,name,position,about,resume,userID})
        newProfile.save()
        res.status(200).json(newProfile)
    }
   }catch(err){
    res.status(401).json(err)
   }
}

exports.getProfile=async(req,res)=>{
    try{
        const userId=req.payload
        const result=await profiles.find({userId})
        res.status(200).json(result)
    }catch(err){
        res.status(401).json(err)
    }
}