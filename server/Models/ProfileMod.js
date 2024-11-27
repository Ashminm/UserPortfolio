const mongoose = require('mongoose')

const profileSchema= new mongoose.Schema({
    profileimg:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true 
    },
    resume:{
        type:String,
        required:true
    },
    userID:{
        type:String,
        required:true
    }
})

const profiles=mongoose.model('profiles',profileSchema)
module.exports=profiles