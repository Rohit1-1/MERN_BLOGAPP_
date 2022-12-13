require("dotenv").config()
const jwt=require("jsonwebtoken")
const validation=(req,res,next)=>{
   console.log(req.body,'po');
    const token = req.headers.authorization?.split(" ")[1]
  // console.log(typeof(token),'vald');
    try {
       
        var decoded = jwt.verify(token,process.env.key);
        if(decoded){
            req.body.userId=decoded.userId
          console.log(req.body,'vdddddd');
            next()
        }
        else{
            res.send({"msg":"Not authorised"})
        }
      
       
    } catch (error) {
        res.send({"msg":"Not authorised"})
    }
   
}

module.exports={validation}