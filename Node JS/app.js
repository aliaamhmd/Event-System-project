const express=require("express");
const server=express();
const cors=require("cors")
const mongoose=require("mongoose");
const body_parser=require("body-parser");
const studentRouter=require("./Routers/StudentRouter");
const speakerRouter=require("./Routers/SpeakerRouter");
const eventRouter=require("./Routers/EventRouter");
const authRouter=require("./Routers/authRouter");

mongoose.connect("mongodb://localhost:27017/nodeprojectDB")
.then(()=>{console.log("DB connected");
server.listen(process.env.PORT||8080,()=>{
    console.log("listening.....")
})})
.catch(erroe=>console.log("connction error in DB"))


server.use(cors())

//logger MW
server.use((request,response,next)=>
{
    console.log(request.url,request.method);
    next();
})
//using bodyParser
server.use(body_parser.json())
server.use(body_parser.urlencoded({extended:false}))

//Routs MW
server.use(authRouter);
server.use(studentRouter);
server.use(speakerRouter);
server.use(eventRouter);




//Notfound MW
server.use((request,response)=>{
    response.status(404).json({message:"page is not found"})
})

//error MW
server.use((error,request,response,next)=>{
    response.status(500).json({meassge:error+""})
})

