const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
username:{
type:String,
required:true
},
email:{
required:true,
type:String,
unique:true
},
password:{
type:String,
required:true
}
})

const user=mongoose.model("users",userSchema)
module.exports=user