const express=require("express")
const usermodel=require("../model/usermodel")
const router=express.Router()
const bcrypt=require("bcryptjs")
hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/add",async(req,res)=>{
    let {data}={"data":req.body }               //read data
    let password=data.password
    hashPasswordGenerator(password).then(
        (hashedPasword)=>{
            console.log(hashedPasword)
            data.password=hashedPasword
            console.log(data)
    let blog=new usermodel(data)
    let result= blog.save()
    res.json({
        status:"sucess"
    })
        }
    )
    
    //res.send("ad")
})

module.exports=router