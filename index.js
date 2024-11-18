const express= require('express')
require('dotenv').config()
const cors=require('cors')
const router = require('./routers/router')

const TmServer=express()//server creation
TmServer.use(cors())
TmServer.use(express.json())
require('./database/dbConnection')
TmServer.use(router)
PORT=3000 ||process.env.PORT

TmServer.listen(PORT,()=>{
    console.log(`TmServer started running at port ${PORT} and waiting for client request`);
    
})
TmServer.get('/',(req,res)=>{
    res.status(200).send("<h1>TM SERVER STARTED RUNNING</h1>")
})