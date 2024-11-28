const mongoose=require('mongoose')

const currentSchema= new mongoose.Schema({
    position:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    startyear:{
        type:String,
        required:true
    },
    endyear:{
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

const currents=mongoose.model('currents',currentSchema)
module.exports=currents