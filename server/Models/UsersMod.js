const mongoose = require('mongoose')

const usersSchema=new mongoose.Schema({
    acno:{
        type: Number,
        required: true,
        unique: true,
    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    }
})

const users=mongoose.model('Users',usersSchema)
module.exports=users