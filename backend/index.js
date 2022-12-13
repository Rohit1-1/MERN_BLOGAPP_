const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")
const {connection}=require("./config/db")
const {signuprouter}=require("./router/signup.router")
const {loginrouter}=require("./router/login.router")
const {User_Model}=require('./model/User.model')
const {validation}=require("./middleware/validation")

const {postRouter}=require("./router/post.router")
const app=express();
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
//app.use(express.json())
app.use(cors())
app.use("/signup",signuprouter)
app.use("/login",loginrouter)
app.use("/post",postRouter)

app.get('/',validation,async(req,res)=>{
    //console.log(req.body.userId)
    res.send({"msg":"Welcome to homepage"})
})

app.listen(8080,async(req,res)=>{
try {
    await connection;
    console.log('server started')
} catch (error) {
    console.log('something went wong')
    console.log(error);
}
})



