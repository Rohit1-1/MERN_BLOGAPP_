const mongoose=require("mongoose");


const postSchema=mongoose.Schema({
    title:String,
    content:String,
    topic:String,
    image:String,   
    userId:String,  
    author:String,
    avatar:String,
    date:String
})

const Post_Model=mongoose.model('post',postSchema)

module.exports={Post_Model}