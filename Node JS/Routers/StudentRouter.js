const express=require("express")
const router=express.Router();
const {body,param,query}=require("express-validator")
const Controller=require("./../controllers/StudentController")
const authMw=require("./../MiddleWares/authMw")
//router.use(authMw)
router.route("/Students")
.get(authMw,Controller.getAllStudents)
.post([
    body("Email").isEmail().withMessage("invalid Email")
],Controller.creatStudent)
// .put(Controller.updateStudent)
// .delete(Controller.deleteStudent)
router.get("/Students/:id",Controller.getStudentById)
router.put("/Students/:id",Controller.updateStudent)
router.delete("/Students/:id",Controller.deleteStudent)
module.exports=router;