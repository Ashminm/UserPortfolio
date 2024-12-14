const mongoose=require('mongoose')

const toolSchema= new mongoose.Schema({
    tool:{
        type:String,
        required:true
    },
    userID:{
        type:String,
        required:true
    }
})

const tools=mongoose.model('tools',toolSchema)
module.exports=tools