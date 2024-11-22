const mongoose = require('mongoose');

const connectionString=process.env.Database

mongoose.connect(connectionString).then((res)=>{
    console.log("App connected with mongoose...!");
    
}).catch((err)=>{
    console.log("connection error");
    console.log(err);
})