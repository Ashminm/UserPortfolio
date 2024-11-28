const mongoose=require('mongoose')

const RecentSchema=new mongoose.Schema({
    projectimg:{
        type:String,
        required:true
    },
    project_name:{
        type:String,
        required:true
    },
    work_type:{
        type:String,
        required:true
    },
    project_type:{
        type:Number,
        required:true
    },
    projectlink:{
        type:String,
        required:true
    },
    userID:{
        type:String,
        required:true
    }
})

const recentworks=mongoose.model('recentworks',RecentSchema)
module.exports=recentworks