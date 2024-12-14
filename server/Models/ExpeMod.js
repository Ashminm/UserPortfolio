const mongoose=require('mongoose')

const expeSchema=new mongoose.Schema({
    startyear:{
        type:Number,
        required:true
    },
    endyear:{
        type:Number,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    userID:{
        type:String,
        required:true
    }
})

const experiances=mongoose.model('experiances',expeSchema)
module.exports=experiances