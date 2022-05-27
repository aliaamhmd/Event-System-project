const express=require("express")
const router=express.Router();
const {body,param,query}=require("express-validator")
const Controller=require("./../controllers/SpeakerController")

const authMw=require("./../MiddleWares/authMw")
//router.use(authMw)
router.route("/Speakers")
.get(authMw,Controller.getAllSpeakers)
.post([
body("Email").isEmail().withMessage("invalid Email")
],Controller.creatSpeaker)
// .put(Controller.updateSpeaker)
// .delete(Controller.deleteSpeaker)
router.get("/Speakers/:id",Controller.getSpeakerById)
router.put("/Speakers/:id",Controller.updateSpeaker)
router.delete("/Speakers/:id",Controller.deleteSpeaker)
module.exports=router;