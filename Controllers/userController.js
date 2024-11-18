const jwt=require('jsonwebtoken')
const user=require('../models/userModel')
exports.registerController=async(req,res)=>
{
    console.log("inside registerController");
      const{username,email,password}=req.body
      try{
        const existingUser=await user.findOne({email})

        if(!existingUser)
        {
            const newUser=new user(
                {username,email,password}
            )
            await newUser.save()
            res.status(200).json(newUser)
        }
      }
      catch(err)
      {
        console.log(err);
        res.status(401).json("All ready exist")
        
      }


    
}
exports.loginController=async(req,res)=>{
    console.log("inside login controller");
    const{email,password}=req.body
   try{
    const existingUser=await user.findOne({email})
    if(existingUser)
    {
        const token=await jwt.sign({userId:existingUser._id},process.env.JWTPASSWORD)
        if(password==existingUser.password)
        {
            res.status(200).json({"user":existingUser,token})
        }
        else{
            res.status(401).json("Invalid password")
        }
    }
    else{
        res.status(401).json("Invalid user")
    }
   }
catch(err)
{
    console.log(err);
    res.status(401).json("Invalid user")
    
}


    
}