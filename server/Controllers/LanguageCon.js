const langs=require('../Models/LanguageMod')

exports.addLanguage=async(req,res)=>{
    try{
        const {language,preference}=req.body
        console.log(language,preference);
        
        if (!language || !preference) {
            return res.status(400).json({ error: "Both 'language' and 'preference' fields are required." });
        }
        const userID=req.payload
        // console.log(userID);
        
        const existingLang=await langs.findOne({language,preference,userID})
        if(existingLang){
            res.status(406).json("Already in your list")
        }else{
            const newlang=new langs({language,preference,userID})
            newlang.save()
            // console.log(newlang);
            
            res.status(200).json(newlang)
        }
    }catch(err){
        res.status(401).json(err)
    }
}