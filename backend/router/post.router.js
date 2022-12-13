const {Router}=require("express");
const cloudinary=require("cloudinary")
const {Post_Model}=require("../model/Post.model");
const {User_Model}=require("../model/User.model");
const {gaurd}=require("../middleware/gaurd")
const {validation}=require("../middleware/validation")
const upload=require("../middleware/upload")
const {date}=require("../utils/date")
require('../middleware/cloudinary')
const postRouter=Router();


postRouter.get("/",async(req,res)=>{
  
   try {
    const posts=await Post_Model.find().select({"userId":0});
    res.send(posts)
   } catch (error) {
    res.send({"msg":"Something went wrong"})
   }
   
})

postRouter.get("/feed",validation,async(req,res)=>{
    let userId=req.body.userId
    try {
     const posts=await Post_Model.find({userId:userId})
     res.send(posts)
    } catch (error) {
     res.send({"msg":"Something went wrong"})
     console.log(error);
    }
    
 })
 
// postRouter.post("/create",validation,async(req,res)=>{
//     let payload=req.body
//     // const result=await cloudinary.v2.uploader.upload(req.file.path)
//     //console.log(result);
  
//     let user=await User_Model.findOne({_id:payload.userId})
//     let author=user?.name
//     let avatar=user?.avatar
//    // console.log(user);
   
    
//    console.log(payload,'post');
//     let postdata={...payload,date,avatar,author}
// try {
//     if(user!==null&&Object.keys(user).length>0){
//         let post=new Post_Model(postdata)
//         post.save();
//         res.send({"msg":"post created successfully"})
//     }
//     else{
//         res.send({"msg":"something went wrong try login again !"})
//     }
    
// } catch (error) {
//     res.send({"msg":"something went wrong"})
// }
// })


postRouter.post("/create",validation,upload.single("blog_img"),validation,async(req,res)=>{
    let payload=req.body
   let postdata
   let user=await User_Model.findOne({_id:payload.userId})
   if(req.file){
    const result=await cloudinary.v2.uploader.upload(req.file.path)
     let author=user?.name
     let avatar=user?.avatar
    let image=result?.url
     postdata={...payload,author,avatar,date,image}
   }
   else{
   
     let author=user?.name
     let avatar=user?.avatar
     postdata={...payload,author,avatar,date}
   }
    
try {
    if(user!==null&&Object.keys(user).length>0){
        let post=new Post_Model(postdata)
        post.save();
        res.send({"msg":"post created successfully"})
    }
    else{
        res.send({"msg":"something went wrong try  again !"})
    }
    
} catch (error) {
    //console.log(error);
    res.send({"msg":"something went wrong"})
}
})

postRouter.patch("/update/:id",validation,upload.single("blog_img"),async(req,res)=>{
    let _id=req.params.id
    let payload=req.body
    let postdata;
    if(req.file){
        const result=await cloudinary.v2.uploader.upload(req.file.path)
        let image=result?.url
        postdata={...payload,image}
    }
    else{
        postdata={...payload}
    }
    try {

        await Post_Model.findByIdAndUpdate(_id,postdata)
        res.send({"msg":"post updated successfully"})
    } catch (error) {
        res.send({"msg":"something went wrong"})
    }
})
postRouter.delete("/delete/:id",validation,async(req,res)=>{
    let {id}=req.params
    try {
        await Post_Model.findByIdAndDelete({_id:id})
        res.send({"msg":"Deleted successfully"})
    } catch (error) {
        res.send({"msg":"something went wrong"})
    }
})

module.exports={postRouter}





