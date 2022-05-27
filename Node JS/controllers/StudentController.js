const {validationResult}=require("express-validator")
const Student=require("./../models/StudentModel")
module.exports.getAllStudents=(request,response,next)=>{
    Student.find({})
    .then((Data)=>{response.status(200).json(Data)})
    .catch(error=>{
        next(error);
    })
    
    // console.log(request.query)
    // console.log(request.params)

}
module.exports.creatStudent=(request,response,next)=>{
    let res=validationResult(request)
    console.log(res)
    if(!res.isEmpty()){
       let errormsg=res.array().reduce((current,error)=>current+error.msg+" "," ");
       let error=new Error(errormsg);
       error.status=422;
       throw error;
    }
    let student=new Student({
        Email:request.body.Email,
        Password:request.body.Password

    })
    student.save()
    .then((Data)=>{response.status(201).json(Data)})
    .catch(error=>{next(error)})

    //console.log(request.body)

}
module.exports.updateStudent=(request,response,next)=>{
    
    Student.updateOne({_id:request.params.id},{
        $set:{Email:request.body.Email,
            Password:request.body.Password
            }
    }).then((data)=>{
        if(data.matchedCount==0){throw new Error("student not exists");}
        response.status(200).json(data)})
    .catch(error=>next(error))

}
module.exports.deleteStudent=(request,response,next)=>{
    Student.deleteOne({_id:request.params.id})
    .then((data)=>{
        if(data.deletedCount==0){throw new Error("student not exists");}
        response.status(200).json(data)})
    .catch(error=>next(error))

}
module.exports.getStudentById=(request,response,next)=>{
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
        if(data==null){throw new Error("student not exists");}
        response.status(200).json(data)})
    .catch(error=>next(error))
    
    

}