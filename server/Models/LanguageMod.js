const mongoose=require('mongoose')

const langSchema= new mongoose.Schema({
    language:{
        type:String,
        required:true
    },
    preference:{
        type:String,
        required:true
    },
    userID:{
        type:String,
        required:true
    }
})

const languages=mongoose.model('languages',langSchema)
module.exports=languages