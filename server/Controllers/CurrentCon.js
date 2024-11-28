const currents=require('../Models/CurrentMod')

exports.addCurrent=async(req,res)=>{
    try{
        const {position}=req.body
        const name = req.body.name || 'Freelancer';
        const startyear = req.body.startyear || 'Not set';
        const endyear = req.body.endyear || 'Not set';
        const about = req.body.about || 'An independent contractor who earns wages on a per-job or per-task basis, typically for short-term work';
        const location = req.body.location || 'At Home';

        const userID=req.payload
        
        const existingCurrentPosition=await currents.findOne({position,name,startyear,endyear,about,location,userID})
        if(existingCurrentPosition){
            res.status(406).json("Already exist position")
        }else{
            const newCurrent=new currents({position,name,startyear,endyear,about,location,userID})
            newCurrent.save()
            res.status(200).json(newCurrent)            
        }
    }catch(err){
        res.status(401).json(err)
    }
}

exports.getCurrent=async(req,res)=>{
    try{
        const result=await currents.find({userID:req.payload})
        res.status(200).json(result)
    }catch(err){
        res.status(401).json(err)
    }
}

exports.getCurrentOne=async(req,res)=>{
    try{
        const result=await currents.find({userID:req.payload}).sort({ _id: -1 }).limit(1)
        res.status(200).json(result)
    }catch(err){
        res.status(401).json(err)
    }
}