const express=require("express")
const cors=require("cors")
const  mongoose=require("mongoose")

const app=express()
const userRoute=require("./controller/userRouter")

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://AthiraRam:athira235@cluster0.orujzdx.mongodb.net/blogdb?retryWrites=true&w=majority",{
  useNewUrlParser:true
}
)


app.use("/api/blog",userRoute)

app.listen(3001,()=>{
    console.log("Server running")
})