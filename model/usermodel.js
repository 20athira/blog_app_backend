const mongoose=require("mongoose")

//creating structure
const blogschema=new mongoose.Schema(
        {
            name:String,
            age:String,
            mobileno:String,
            address:String,
            pincode:String,
            email:String,
            password:String,
        }
)
module.exports=mongoose.model("blog",blogschema)