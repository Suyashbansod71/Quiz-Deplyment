const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({


    option:[{
       type: String,
       required:[true,"Field is required"]
    }],
    ques1:{
        type:String,
        required:[true,"Field is required"]
        },
     


     optionA3:{
        type:String,
        required:[true,"Field is required"]
    },
    optionB3:{
        type:String,
        required:[true,"Field is required"]
    },
    optionC3:{
        type:String,
        required:[true,"Field is required"]
    },
    optionD3:{
        type:String,
        required:[true,"Field is required"]
    },
   ques3:{
    type:String,
    required:[true,"Field is required"]
    },

    
    optionA2:{
        type:String,
        required:[true,"Field is required"]
    },
    optionB2:{
        type:String,
        required:[true,"Field is required"]
    },
    optionC2:{
        type:String,
        required:[true,"Field is required"]
    },
    optionD2:{
        type:String,
        required:[true,"Field is required"]
    },
   ques2:{
    type:String,
    required:[true,"Field is required"]
    }
});

const infoModel = mongoose.model("quizzes",dataSchema);
module.exports=infoModel;