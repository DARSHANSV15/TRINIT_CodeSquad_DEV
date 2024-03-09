const mongoose = require("mongoose");
const {Schema}=mongoose;

let tutorSchema= new Schema({
    
    fullName: String,
    DOB: {
        type: Date
    },
    gender: {
        type: String,
        enum: ["male","female","others"]
    },
    contact: {
        type: String,
    },

    userID:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    qualification: {type: String},
    experience: {
        type: Number,
    },
    languages: [{ type: String, required: true }],

    liveSessionScheduled: [
        {
          studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
          session: { type: mongoose.Schema.Types.ObjectId, ref: 'Session' },
          scheduledTime: { type: Date, required: true },
        },
      ],
      personalizedTests: [
        {
          studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
          questions: [
            {
              question: { type: String, required: true },
              answer: { type: String, enum: ["a","b","c","d"] },
              correctAns: {
                type: String,
                required: true
              }
            },
          ],
          feedback: { type: String },
          date: { type: Date, default: Date.now },
        },
      ],  

})

module.exports=mongoose.model("Tutor",tutorSchema)