const asyncHandler = require('express-async-handler');
const Users = require('../models/user');
const generateToken  = require('../utils/generatetokens');
const User = require('../models/user');

const registerUser = asyncHandler(async (req, res) =>{
    const {name,email , password  } = req.body
    const  Existsuser = await User.findOne({email})
    if(Existsuser){
      res.status(400)
      throw new Error("user , already exists")
    }

    const user = await User.create({name , email, password})

    if(user){
      console.log("user created")
      res.status(201).json({
        _id : user._id,
        name : user.name,
        token : generateToken(user._id),
        isAdmin :  user.isAdmin,
        email: user.email,

      });
    }
    else{
      res.status(404)
      throw  new Error("user not created")
    }
});
const authController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
   const user =  await Users.findOne({email});
   if(user  && user.matchPassword(password)){
    res.json({
        _id : user._id,
        name : user.name,
        token : generateToken(user._id),
        isAdmin :  user.isAdmin,
        email: user.email,
    });
   }
   else{
    res.status(401);
    throw new Error("invalid Email or password ");
   }
});
const getUserProfile = asyncHandler(async (req, res) => {
   const user = await Users.findById(req.user._id)
   if(user){
    res.json({
      _id : user._id,
      name : user.name,
      isAdmin :  user.isAdmin,
      email: user.email,
  });
   }else{
    res.status(404)
    throw new Error ("user not found ");
   }
});

module.exports = { authController , getUserProfile , registerUser };
