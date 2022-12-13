const gaurd=(req,res,next)=>{
    let {title,content,topic,image}=req.body
    if(typeof(title)==='string',typeof(content)==='string',typeof(topic)==='string',typeof(image)==='string'){
   next()
    }
    else{
        res.send({"msg":"Invalid format"})
    }
}

module.exports={gaurd}