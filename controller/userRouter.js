const express=require("express")
const usermodel=require("../model/usermodel")
const router=express.Router()


router.post("/add",async(req,res)=>{
    let data=req.body                //read data
    let blog=new usermodel(data)
    let result=await blog.save()
    res.json({
        status:"sucess"
    })
    //res.send("ad")
})

module.exports=router