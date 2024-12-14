const abouts=require('../Models/AboutMod')

exports.addAbout=async(req,res)=>{
    try{
        const { collagename, course, startyear: rawStartYear, endyear:rawEndYear, weblink } = req.body;

        if (!rawStartYear || isNaN(Date.parse(rawStartYear))) {
          return res.status(400).json("Invalid start year format");
        }
        const Sdate = new Date(rawStartYear);
        const startyear = Sdate.getFullYear(); 

        if (!rawEndYear || isNaN(Date.parse(rawStartYear))) {
          return res.status(400).json("Invalid end year format");
        }
        const Edate = new Date(rawStartYear);
        const endyear = Edate.getFullYear(); 

        const userID=req.payload
        const aboutimg=req.files.aboutimg[0].filename
        const existingAbout=await abouts.findOne({collagename,course,startyear,endyear,weblink,userID})
        if(existingAbout){
            res.status(406).json("Already exist details!")
        }else{
            const newAbout=new abouts({aboutimg,collagename,course,startyear,endyear,weblink,userID})
            newAbout.save()
            const docCount=(await abouts.collection.countDocuments())+1;
            res.status(200).json({newAbout,docCount})
            console.log(newAbout,docCount);   
        }
    }catch(err){
        res.status(401).json(err)
    }
}

exports.getAbout=async(req,res)=>{
    try{
        const userID=req.payload
        const result=await abouts.find({userID})
        res.status(200).json(result)
        
    }catch(err){
        res.status(401).json(err)
    }
}

exports.getAboutOne=async(req,res)=>{
    try{
        const userID=req.payload
        const result=await abouts.find({userID}).sort({_id: -1}).limit(1)
        res.status(200).json(result)
        
    }catch(err){
        res.status(401).json(err)
    }
}