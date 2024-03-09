const express = require('express');
const router = express.Router();
const Lesson = require('../models/lesson'); // Assuming you have a Lesson model defined
const Tutor=require("../models/tutor");
const { FRONT_URL } = require('../config/url');


router.get('/', async (req, res) => {
    try {
      // Query the database to retrieve all lessons
      const lessons = await Lesson.find().populate('tutor');
      console.log(lessons);
      res.json(lessons);
    } catch (error) {
      console.error('Error retrieving lessons:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

router.post('/create', async (req, res) => {
    try {
        // Retrieve data from the request body
        const { title, description, scheduledTime, duration, videoCallLink,tutor } = req.body;

        // Create a new lesson instance using your Lesson model
        const newLesson = new Lesson({
            title,
            description,
            scheduledTime,
            duration,
            videoCallLink,
            tutor
        });

        // Save the lesson to the database
        const savedLesson = await newLesson.save();

        // Respond with a success message and the saved lesson data
        res.status(201).json({
            success: true,
            message: 'Lesson created successfully',
            lesson: savedLesson,
        });
        
    } catch (error) {
        // Handle errors and respond with an error message
        console.error('Error creating lesson:', error.message);
        res.status(500).json({
            success: false,
            message: 'Error creating lesson',
            error: error.message,
        });
    }
});



// Endpoint to get details of a single lesson by ID
router.get('/:lessonId', async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.lessonId).populate('tutor');
    console.log(lesson);
    res.json(lesson);
  } catch (error) {
    console.error('Error retrieving lesson details:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = router;
