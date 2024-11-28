const mongoose=require('mongoose')

const skillSchema= new mongoose.Schema({
    skill:{
        type:String,
        required:true
    },
    userID:{
        type:String,
        required:true
    }
})

const skills=mongoose.model('skills',skillSchema)
module.exports=skills