const express = require('express');
const router = express.Router();
const Tutor = require('.././models/tutor'); // Adjust the path based on your project structure
const User = require('../models/user');
const { isLoggedIn } = require('../middlewares');
const { FRONT_URL } = require('../config/url');

// Route to handle tutor registration
router.post('/register', isLoggedIn, async (req, res) => {
    try {
      // Extract tutor data from the request body
      const {
        fullName,
        DOB,
        gender,
        contact,
        qualification,
        experience,
        languages,
      } = req.body;
  
      // Create a new Tutor instance using the model
      const newTutor = new Tutor({
        fullName,
        DOB,
        gender,
        contact,
        qualification,
        experience,
        languages,
      });
  
      // Save the tutor to the database
      const savedTutor = await newTutor.save();
  
      const userId = req.user._id;
  
      if (!userId) {
        return res.redirect(FRONT_URL + "/login");
      }
  
      // Update the user's tutorID in the database
      await User.findByIdAndUpdate(userId, { tutorID: savedTutor._id });
  
      // Send a success response with the saved tutor data
      res.status(201).json(savedTutor);
    } catch (error) {
      // Handle errors, and send an error response
      console.error('Error registering tutor:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

module.exports = router;
