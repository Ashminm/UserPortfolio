const mongoose=require('mongoose')

const serviSchema= new mongoose.Schema({
    service:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    userID:{
        type:String,
        required:true
    }
})

const services=mongoose.model('services',serviSchema)
module.exports=services