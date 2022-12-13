
const cloudinary=require("cloudinary")
require("dotenv").config()
cloudinary.config({
cloud_name:process.env.Cloud_name,
api_key :process.env.Api_key,
api_secret :process.env.Private_Key,
});