require('dotenv').config()
const express=require('express')
const cors=require('cors')


const App=express()
App.use(cors())
App.use(express.json())

const PORT=3000 || process.env.PORT

App.listen(PORT,()=>{
        console.log('App running:',PORT);
})
App.get('/',(req,res)=>{
    res.send('<h2>Waiting for request.....!!</h2>');
})