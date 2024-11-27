const mongoose=require('mongoose')

const aboutSchema=new mongoose.Schema({
    aboutimg:{
        type:String,
        required:true
    },
    collagename:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    startyear:{
        type:Number,
        required:true
    },
    endyear:{
        type:Number,
        required:true
    },
    weblink:{
        type:String,
        required:true
    },
    userID:{
        type:String,
        required:true
    }
})

const abouts=mongoose.model('abouts',aboutSchema)
module.exports=abouts