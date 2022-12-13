const {Router}=require("express")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const {User_Model}=require('../model/User.model')
require("dotenv").config()
const loginrouter=Router();

loginrouter.post('/',async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user =await User_Model.find({email})
        const userData=await User_Model.findOne({email}).select({"password":0,_id:0})
       // console.log(user);
        if(user.length>0){
            const hash_password=user[0].password
           
            bcrypt.compare(password, hash_password, function(err, result) {
                // result == 
               // console.log(password===hash_password,result);
                if(result){
                    var token = jwt.sign({ "userId": user[0]._id }, process.env.key,{expiresIn:'24h'});
                    res.send({"msg":"login successfull","login":true,"token":token,"user":userData})
                   
                }
                else{
                    res.send({"msg":"login fail","login":false})
                }
            });
        }
      
        else{
            res.send({"msg":"something went wrong",})
        }
    } catch (error) {
        console.log(error)
    }
   
   
})

module.exports={loginrouter}