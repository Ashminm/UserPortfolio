const skills=require('../Models/SkillMod')

exports.addSkills=async(req,res)=>{
    try{
        const {skill}=req.body

        const userID=req.payload
        const existingSkill=await skills.findOne({skill,userID})
        if(existingSkill){
            res.status(406).json(`Already in your list ${skill}`)
        }else{
            const newSkill=new skills({skill,userID})
            newSkill.save();
            res.status(200).json(newSkill)
        }
    }catch(err){
        res.status(401).json(err)
    }
}

exports.getSkills=async(req,res)=>{
    try{        
        const result=await skills.find({userID:req.payload})
        res.status(200).json(result)
    }catch(err){
        res.status(401).json(err)
    }
}