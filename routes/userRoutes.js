const express = require("express");
const { loginController, registerController, addQuizController } = require("../controllers/userCtrl");

const router  = express.Router();

//routes
router.post("/login", loginController);


router.post("/register", registerController);

router.post("/createquiz", addQuizController);

module.exports = router