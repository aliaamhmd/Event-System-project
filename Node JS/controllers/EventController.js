const {validationResult}=require("express-validator")
const Event=require("./../models/EventModel")
module.exports.getAllEvents=(request,response,next)=>{
    Event.find({}).populate({path:"MainSpeaker"}).populate({path:"Speakers"}).populate({path:"Students"})
    .then((Data)=>{response.status(200).json(Data)})
    .catch(error=>{
        next(error);
    })
    
    // console.log(request.query)
    // console.log(request.params)

}
module.exports.creatEvent=(request,response,next)=>{
    let res=validationResult(request)
    console.log(res)
    if(!res.isEmpty()){
       let errormsg=res.array().reduce((current,error)=>current+error.msg+" "," ");
       let error=new Error(errormsg);
       error.status=422;
       throw error;
    }
    let event=new Event({
        _id:request.body._id,
        Title:request.body.Title,
        EventDate:request.body.EventDate,
        mainSpeaker:request.body.mainSpeaker,
        speakers:request.body.speakers,
        students:request.body.students

        

    })
    event.save()
    .then((Data)=>{response.status(201).json(Data)})
    .catch(error=>{next(error)})

    //console.log(request.body)

}
module.exports.updateEvent=(request,response,next)=>{
    
    Event.updateOne({_id:request.body.id},{
        $set:{Title:request.body.Title,
            EventDate:request.body.EventDate,
            mainSpeaker:request.body.mainSpeaker,
            speakers:request.body.speakers,
            students:request.body.students
            }
    }).then((data)=>{
        if(data.matchedCount==0){throw new Error("event not exists");}
        response.status(200).json(data)})
    .catch(error=>next(error))

}
module.exports.deleteEvent=(request,response,next)=>{
    Event.deleteOne({_id:request.body.id})
    .then((data)=>{
        if(data.deletedCount==0){throw new Error("event not exists");}
        response.status(200).json(data)})
    .catch(error=>next(error))

}
module.exports.getEventById=(request,response,next)=>{
    let res=validationResult(request)
    console.log(res)
    if(!res.isEmpty()){
       let errormsg=res.array().reduce((current,error)=>current+error.msg+" "," ");
       let error=new Error(errormsg);
       error.status=422;
       throw error;
    }
    Student.findOne({_id:request.params.id})
    .then((data)=>{
        if(data==null){throw new Error("event not exists");}
        response.status(200).json(data)})
    .catch(error=>next(error))
    
    

}