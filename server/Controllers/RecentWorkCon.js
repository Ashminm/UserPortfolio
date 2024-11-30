const recents=require('../Models/RecentWorkMod')

exports.addRecent=async(req,res)=>{
   try{
    const {project_name,work_type,project_type,projectlink}=req.body
    const projectimg=req.files.projectimg[0].filename
    const userID=req.payload
    
    const existingRecentItem=await recents.findOne({project_name,work_type,project_type,projectlink,userID})
    if(existingRecentItem){
        res.status(406).json("Already in the recent work")
    }else{
        const newWork=new recents({projectimg,project_name,work_type,project_type,projectlink,userID})
        await newWork.save()
        res.status(200).json(newWork)
    }
   }catch(err){
    res.status(401).json(err)
    console.log(err);
    
   }
}

exports.getWork=async(req,res)=>{
    try{
    const result=await recents.find({userID:req.payload})
    res.status(200).json(result)
    }catch(err){
        res.status(401).json(err)
    }
}

exports.deleteWork=async(req,res)=>{
    try{
        const result=await recents.deleteMany({userID:req.payload})
        res.status(200).json(result)
    }catch(err){
        res.status(401).json(err)
    }
}