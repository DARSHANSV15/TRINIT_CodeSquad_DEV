const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tutor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tutor', 
    
  },
  // student: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Student', 
  //   required: true,
  // },
  student: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
      },
    ]
  ,
  scheduledTime: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number, 
    required: true,
  },
  videoCallLink: {
    type: String,
    required: true,
  },
  price:{
    type: String,
  },
  lessonMaterials: [{
    title: { type: String },
    url: { type: String },
  }],
  // feedback: {
  //   rating: { type: Number, min: 1, max: 5 },
  //   comment: { type: String },
  // },
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;
