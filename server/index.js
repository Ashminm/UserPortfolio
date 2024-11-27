require('dotenv').config()
const express=require('express')
const cors=require('cors')

const App=express()
App.use(cors())
App.use(express.json())
require('./DBConnection/connect')
const routes= require('./Router/routes');
App.use(routes)
const middilewares =require('./Middileware/JWT')
App.use(middilewares)

App.use('/uploads',express.static('./uploads'))

const PORT=4000 || process.env.PORT

App.listen(PORT,()=>{
        console.log('App running:',PORT);
})
App.get('/',(req,res)=>{
    res.send('<h2>Waiting for request.....!!</h2>');
})