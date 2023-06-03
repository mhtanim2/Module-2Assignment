const express =require('express');
const router =express.Router();


const AuthVerifyMiddleware=require("../middlewares/AuthVerifyMiddleware");
const UsersController=require("../controllers/Users/UsersController");


// User Profile
router.post("/Registration",UsersController.Registration);
router.post("/Login",UsersController.Login);
router.post("/ProfileUpdate",AuthVerifyMiddleware,UsersController.ProfileUpdate);
router.get("/ProfileDetails",AuthVerifyMiddleware,UsersController.ProfileDetails);


module.exports=router;