const {Router}=require("express")
const bcrypt = require('bcrypt');
const {User_Model}=require('../model/User.model')
const cloudinary=require("cloudinary")
const upload=require("../middleware/upload");
require('../middleware/cloudinary')
const signuprouter=Router();
//
signuprouter.post('/',upload.single("profile_pic"),async(req,res)=>{
  console.log(req.body);
  const result=await cloudinary.v2.uploader.upload(req.file.path)
    const {email,password,name}=req.body;
    const avatar= result?.url
    try {
        if(email&&password&&name){
          let finduser=await User_Model.find({email})
          if(finduser.length>0){
            console.log("exist");
            res.send({"msg":"email already exist","signup":false,"userExist":true})
          }
          else{


            bcrypt.hash(password, 6, async function(err, hash) {
              // Store hash in your password DB.
              // 
            if(hash){
              const user=new User_Model({email,password:hash,name,avatar})
              await user.save()
              res.send({"msg":"signup successfull","signup":true,"userExist":false})
            }
            else if(err){
              res.send({"msg":"something went wrong"})
            }
          });
          }
           
        }
        else{
            res.send({"msg":"something went wrong"})
        }
    } catch (error) {
        console.log(error)
    }
   
   
})

module.exports={signuprouter}