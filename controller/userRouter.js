const express=require("express")
const usermodel=require("../model/usermodel")
const router=express.Router()
const bcrypt=require("bcryptjs")
const { match } = require("assert")
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

router.post("/signin",async(req,res)=>{
    let input=req.body
    let email=req.body.email
    let data=await usermodel.findOne({"email":email})
    if(!data)
    {
        res.json(
            {
                status:"Invalid user"
            }
        )
    }
    console.log(data)
    let dbPassword=data.password
    let inputPassword=req.body.password
    console.log(dbPassword)
    console.log(inputPassword)
    const match=await bcrypt.compare(inputPassword,dbPassword)
    if(!match){
        res.json(
            {
                status:"Invalid password"
            }
        )
    }
    res.json(
        {
            status:"sucess"
        }
    )


})

module.exports=router