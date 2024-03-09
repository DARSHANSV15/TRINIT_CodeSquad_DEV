const mongoose = require("mongoose");
const {Schema}=mongoose;

let learnerSchema= new Schema({
    fullName: String,
    DOB: {
        type: Date
    },
    Gender: {
        type: String,
        enum: ["male","female","others"]
    },
    contact: {
        type: String,
    },

    bio:{
        type: String,
    },

    language: {
        type: String,
    }

})

module.exports=mongoose.model("Learner",learnerSchema)