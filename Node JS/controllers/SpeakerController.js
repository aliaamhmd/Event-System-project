const {validationResult}=require("express-validator")
const Speaker=require("./../models/SpeakerModel")
module.exports.getAllSpeakers=(request,response,next)=>{
    Speaker.find({})
    .then((Data)=>{response.status(200).json(Data)})
    .catch(error=>{
        next(error);
    })
    

}
module.exports.creatSpeaker=(request,response,next)=>{
    let res=validationResult(request)
    console.log(res)
    if(!res.isEmpty()){
       let errormsg=res.array().reduce((current,error)=>current+error.msg+" "," ");
       let error=new Error(errormsg);
       error.status=422;
       throw error;
    }
    let speaker=new Speaker({
            Email:request.body.Email,
            UserName:request.body.UserName,
            Password:request.body.Password,
            City:request.body.City,
            Street:request.body.Street,
            Building:request.body.Building
        // _id:request.body.id,
        // Email:request.body.email,
        // Password:request.body.password

    })
    speaker.save()
    .then((Data)=>{response.status(201).json(Data)})
    .catch(error=>{next(error)})

    //console.log(request.body)

}
module.exports.updateSpeaker=(request,response,next)=>{
    
    Speaker.updateOne({_id:request.params.id},{
        $set:{Email:request.body.Email,
            UserName:request.body.UserName,
            Password:request.body.Password,
            City:request.body.City,
            Street:request.body.Street,
            Building:request.body.Building
            
            }
    }).then((data)=>{
        if(data.matchedCount==0){throw new Error("Speaker not exists");}
        response.status(200).json(data)})
    .catch(error=>next(error))

}
module.exports.deleteSpeaker=(request,response,next)=>{
    Speaker.deleteOne({_id:request.params.id})
    .then((data)=>{
        if(data.deletedCount==0){throw new Error("Speaker not exists");}
        response.status(200).json(data)})
    .catch(error=>next(error))

}
module.exports.getSpeakerById=(request,response,next)=>{
    let res=validationResult(request)
    console.log(res)
    if(!res.isEmpty()){
       let errormsg=res.array().reduce((current,error)=>current+error.msg+" "," ");
       let error=new Error(errormsg);
       error.status=422;
       throw error;
    }
    Speaker.findOne({_id:request.params.id})
    .then((data)=>{
        if(data==null){throw new Error("student not exists");}
        response.status(200).json(data)})
    .catch(error=>next(error))
}
