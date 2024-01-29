const express= require('express')
const {authController, getUserProfile, registerUser} = require('../controller/userController')
const {protect} = require('../middlewares/authMiddleware')
const router = express.Router();
router.post('/login' , authController);

//get user profile  private  route 
router.route("/profile").get(protect,getUserProfile);
// we  will create middleware to access   private route web tokens 
router.route("/").post(registerUser);
module.exports= router;