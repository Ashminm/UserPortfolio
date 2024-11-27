const abouts=require('../Models/AboutMod')

exports.addAbout=async(req,res)=>{
    try{
        const {collagename,course,startyear,endyear,weblink}=req.body
        const userID=req.payload
        const aboutimg=req.files.aboutimg[0].filename
        const existingAbout=await abouts.findOne({collagename,course,startyear,endyear,weblink,userID})
        if(existingAbout){
            res.status(406).json("Already exist details!")
        }else{
            const newAbout=new abouts({aboutimg,collagename,course,startyear,endyear,weblink,userID})
            newAbout.save()
            res.status(200).json(newAbout)
        }

    }catch(err){
        res.status(401).json(err)
    }
}

exports.getAbout=async(req,res)=>{
    try{
        const userID=req.payload
        console.log(userID);
        const result=await abouts.find({userID})
        console.log(result)
        res.status(200).json(result)
        
    }catch(err){
        res.status(401).json(err)
    }
}