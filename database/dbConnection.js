const mongoose=require('mongoose')
mongoose.connect(process.env.DBCONNECTIONSTRING).then(res=>{
    console.log('connected to database')
}).catch(err=>{
    console.log('connection failed');
    console.log(err);
    
    
})
