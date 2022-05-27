const express=require("express")
const router=express.Router();
const {body,param,query}=require("express-validator");
const { getAllSpeakers } = require("../controllers/SpeakerController");
const Speaker = require("../models/SpeakerModel");
const Controller=require("./../controllers/EventController")
const authMw=require("./../MiddleWares/authMw")
//router.use(authMw)
router.route("/Events")
.get( Controller.getAllEvents)
.post(body("MainSpeaker").custom(value => {
    return Speaker.findById(value).then(speaker => {
      if (!speaker) {
        return new Error('speaker not exists');
      }
    }); 
})
,Controller.creatEvent)
.put(Controller.updateEvent)
.delete(Controller.deleteEvent)
router.get("/Events/:id",Controller.getEventById)
module.exports=router;