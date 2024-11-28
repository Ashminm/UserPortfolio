const expes=require('../Models/ExpeMod')

exports.addExpe=async(req,res)=>{
    try{
        const {startyear,endyear,position,name,about,location}=req.body
        const userID=req.payload

        const existingExpe= await expes.findOne({startyear,endyear,position,name,about,location,userID})
        if(existingExpe){
            res.status(406).json("Already in your experiance")
        }else{
            const newExpe=new expes({startyear,endyear,position,name,about,location,userID})
            newExpe.save()
            res.status(401).json(newExpe)
        }
    }catch(err){
        res.status(401).json(err)
    }
}

exports.getExpe=async(req,res)=>{
    try{        
        const result=await expes.find({userID:req.payload})
        res.status(200).json(result)
    }catch(err){
        res.status(401).json(err)
    }
}