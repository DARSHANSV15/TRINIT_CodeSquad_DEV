const express = require('express');
const router = express.Router();
const Tutor = require('.././models/tutor');
const User = require('../models/user');
const { isLoggedIn } = require('../middlewares');
const { FRONT_URL } = require('../config/url');


router.post('/register', isLoggedIn, async (req, res) => {
    try {
      
      const {
        fullName,
        DOB,
        gender,
        contact,
        qualification,
        experience,
        languages,
      } = req.body;
  
      
      const newTutor = new Tutor({
        fullName,
        DOB,
        gender,
        contact,
        qualification,
        experience,
        languages,
      });
  
      
      const savedTutor = await newTutor.save();
  
      const userId = req.user._id;
  
      if (!userId) {
        return res.redirect(FRONT_URL + "/login");
      }
  
      
      await User.findByIdAndUpdate(userId, { tutorID: savedTutor._id });
  
      
      res.status(201).json(savedTutor);
    } catch (error) {
      
      console.error('Error registering tutor:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

module.exports = router;
