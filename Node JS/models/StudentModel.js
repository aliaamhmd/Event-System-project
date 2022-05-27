const { autoIncrement }=require('mongoose-plugin-autoinc') ;
const mongoose=require("mongoose");

let studentSchema=new mongoose.Schema({
    _id:Number,
    Email:{type:String ,unique:true},
    Password:String

})
studentSchema.plugin(autoIncrement, 'Students');

module.exports=mongoose.model("Students",studentSchema)