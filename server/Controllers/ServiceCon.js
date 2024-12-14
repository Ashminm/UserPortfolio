const services=require('../Models/ServiceMod')

exports.addService=async(req,res)=>{
    try{
        const {service,about}=req.body
        
        if (!service || !about) {
            return res.status(400).json("Both 'service' and 'about' fields are required.");
        }
        const userID=req.payload
        const existingServi=await services.findOne({service,about,userID})
        if(existingServi){
            res.status(406).json("Already in your list")
        }else{
            const newlservi=new services({service,about,userID})
            newlservi.save();
            res.status(200).json(newlservi)
        }
    }catch(err){
        res.status(401).json(err)
    }
}