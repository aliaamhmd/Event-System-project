const { request } = require("express");
const jwt=require("jsonwebtoken")
const Student=require("./../models/StudentModel")
const Speaker=require("./../models/SpeakerModel")
let token;
module.exports.login=(request,response,next)=>
{
    if(request.body.Email=="aliaa@gmail.com"&&request.body.Password==123)
    {token=jwt.sign({
        id:1,
        email:request.body.email,
        role:"admin"
    },
    "blablablabla"
    );
    response.status(200).json({"Token":token,"role":"Admin"})
}
else{
    Student.findOne({Email:request.body.Email,Password:request.body.Password})
    .then(data=>
        {
            if(data==null)
            {
                Speaker.findOne({Email:request.body.Email,Password:request.body.Password})
                .then(data=>
                    {console.log("data:",data)
                        if(data==null)
                        {
                            
                            throw new Error("username&password is not correct")
                        }
                        token=jwt.sign({
                            id:data._id,
                            email:data.Email,
                            role:"speaker"
                        },
                        "blablablabla"
                        );
                        response.status(200).json({"Token":token,"role":"Speaker","id":data._id})
                        
                    })
                .catch(error=>next(error))
            }
            else{
            token=jwt.sign({
                id:data._id,
                email:data.Email,
                role:"student"
            },
            "blablablabla"
            );
            response.status(200).json({"Token":token,"role":"Student","id":data._id})}
            
        })
    .catch(error=>next(error))

    
}

    
}