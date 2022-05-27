const mongoose=require("mongoose");
const { autoIncrement }=require('mongoose-plugin-autoinc') ;
const SpeakerModel = require("./SpeakerModel");


let eventSchema=new mongoose.Schema({
    _id:Number,
    Title:{type:String ,required:true},
    EventDate:Date,
    MainSpeaker:{type:mongoose.Types.ObjectId,ref:"Speakers"},
    Speakers:[{type:mongoose.Types.ObjectId,ref:"Speakers"}],
    Students:[{type:Number, ref:"Students"}]

})
eventSchema.plugin(autoIncrement, 'Events');

module.exports=mongoose.model("Events",eventSchema)