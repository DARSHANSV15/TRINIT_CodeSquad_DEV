const express = require('express');
const router = express.Router();
const Tutor = require('.././models/tutor');
const User = require('../models/user');
const { isLoggedIn } = require('../middlewares');
const { FRONT_URL } = require('../config/url');


router.post('/register', async (req, res) => {
    try {
      
      const {
        fullName,
        DOB,
        gender,
        contact,
        qualification,
        experience,
        languages,
        userID,
      } = req.body;
  
      
      const newTutor = new Tutor({
        fullName,
        DOB,
        gender,
        contact,
        qualification,
        experience,
        languages,
        userID,
      });
  
      
      const savedTutor = await newTutor.save();

      let updateUser= await User.findByIdAndUpdate(userID,{tutorID: savedTutor._id});
      console.log("----",updateUser);

  
      
      res.status(201).json(savedTutor);
    } catch (error) {
      
      console.error('Error registering tutor:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

module.exports = router;
