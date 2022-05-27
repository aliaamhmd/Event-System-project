const mongoose=require("mongoose");
const { autoIncrement }=require('mongoose-plugin-autoinc') ;
let speakerSchema=new mongoose.Schema({
    Speaker:mongoose.Types.ObjectId,
    ID:{type:Number ,unique:true},
    Email:{type:String ,unique:true},
    UserName:String,
    Password:String,
    City:String,
    Street:String,
    Building:String


})
speakerSchema.plugin(autoIncrement, { model: 'Speakers', field: 'ID' });

module.exports=mongoose.model("Speakers",speakerSchema)