const langs=require('../Models/LanguageMod')

exports.addLanguage=async(req,res)=>{
    try{
        const {language,preference}=req.body
        console.log(language,preference);
        
        if (!language || !preference) {
            return res.status(400).json("Both 'language' and 'preference' fields are required.");
        }
        const userID=req.payload
        const existingLang=await langs.findOne({language,preference,userID})
        if(existingLang){
            res.status(406).json("Already in your list")
        }else{
            const newlang=new langs({language,preference,userID})
            newlang.save();
            res.status(200).json(newlang)
        }
    }catch(err){
        res.status(401).json(err)
    }
}

exports.getLanguage=async(req,res)=>{
    try{        
        const result=await langs.find({userID:req.payload})
        res.status(200).json(result)
    }catch(err){
        res.status(401).json(err)
    }
}