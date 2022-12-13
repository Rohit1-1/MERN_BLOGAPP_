const postgaurd=(req,res,next)=>{
    let {title,content,topic,image}=req.body
    if(title&&typeof(title)!=='string'){
        
            res.send({"msg":"Invalid format"})
       
    }
    if(content&&typeof(content)!=='string'){
      
            res.send({"msg":"Invalid format"})     
    }

    if(topic&&typeof(topic)!=='string'){
       
            res.send({"msg":"Invalid format"})
      
    }
    if(image&&typeof(image)!=='string'){
      
            res.send({"msg":"Invalid format"})
        
    }
    else{
        next()
       
    }
}

module.exports={postgaurd}