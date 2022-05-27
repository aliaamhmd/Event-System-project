const jwt=require("jsonwebtoken")
module.exports=(request,response,next)=>{
if(request.method!=="OPTIONS"){
let token,decodedToken
token=(request.get("Authorization")).split(" ")[1];
console.log("token:",token)
try{
decodedToken=jwt.verify(token,"blablablabla")
console.log(decodedToken)}
catch(error){
    next(new Error("Not Authenticated"))
}
request.role=decodedToken.role;
}
next();

}