const userModel = require("../models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const infoModel = require("../models/infoModel");





//register callback
const registerController = async (req, res) => {
    try {
      const exisitingUser = await userModel.findOne({ email: req.body.email });
      if (exisitingUser) {
        return res
          .status(200)
          .send({ message: "User Already Exist", success: false });
      }
      const password = req.body.password;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      req.body.password = hashedPassword;
      const newUser = new userModel(req.body);
      await newUser.save();
      res.status(201).send({ message: "Register Sucessfully", success: true });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: `Register Controller ${error.message}`,
      });
    }
  };


  // login callback
const loginController = async (req, res) => {
    try {
      const user = await userModel.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(200)
          .send({ message: "user not found", success: false });
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res
          .status(200)
          .send({ message: "Invlid EMail or Password", success: false });
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res.status(200).send({ message: "Login Success", success: true, token });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
    }
  };


  //Add New Quiz
  const addQuizController=async(req,res)=>{
    //   try {
    //     const newUser = await infoModel({...req.body});
    //     await newUser.save();
    //     res.status(201).send({
    //       success: true,
    //       message: "Quiz Added Successfully",
    //     });
    //   } catch (error) {
    //     console.log(error);
    // res.status(500).send({
    //   success: false,
    //   error,
    //   message: "Error while adding the quiz",
    // });
    //   }
 
      try {
        console.log(req.body)
    const {options,ques1,ques2,optionA2, optionB2, optionC2, optionD2,ques3,optionA3, optionB3, optionC3, optionD3} = req.body;
    const data = {
      
       //For question 1
       ques1:ques1,
       option:option,
   


      //For question 2
      ques2:ques2,
      optionA2:optionA2,
      optionB2:optionB2,
      optionC2:optionC2,
      optionD2:optionD2,
       
      //For question 3
      ques3:ques3,
      optionA3:optionA3,
      optionB3:optionB3,
      optionC3:optionC3,
      optionD3:optionD3,
      
    }
    

    const response = await infoModel.create(data);
    
    res.status(201).send({message: "Quiz added", response: response});

      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: `Quiz Controller${error.message}`,
        }); 
      }


    
   
  };


module.exports = { loginController, registerController, addQuizController };