const tools=require('../Models/ToolMod')

exports.addTools=async(req,res)=>{
    try{
        const {tool}=req.body

        const userID=req.payload
        const existingTool=await tools.findOne({tool,userID})
        if(existingTool){
            res.status(406).json(`Already in your list ${tool}`)
        }else{
            const newTool=new tools({tool,userID})
            newTool.save();
            res.status(200).json(newTool)
        }
    }catch(err){
        res.status(401).json(err)
    }
}