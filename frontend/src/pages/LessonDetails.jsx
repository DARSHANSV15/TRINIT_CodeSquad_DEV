// components/LessonDetails.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BACK_URL } from '../../config';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


const LessonDetails = () => {
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    const fetchLessonDetails = async () => {
      try {
        const response = await axios.get(BACK_URL+`/lesson/${lessonId}`, {
            headers: { 'Content-Type': 'application/json',
            'Accept': 'application/json', },
            // Ensure the response is treated as text
          });
        console.log(response.data);
        setLesson(response.data);
      } catch (error) {
        console.error('Error fetching lesson details:', error.message);
      }
    };

    fetchLessonDetails();
  }, [lessonId]);

  if (!lesson) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar></Navbar>
      <div className='main-cnt-flex'>
        <Sidebar></Sidebar>
        <div className='main-cnt'>
    <div>
      <h2>{lesson.title}</h2>
      <p>Description: {lesson.description}</p>
      <p>Scheduled Time: {new Date(lesson.scheduledTime).toLocaleString()}</p>
      <p>Duration: {lesson.duration} hours</p>
      <p>Tutor: {lesson.tutor.fullName}</p>
      <p>Students: {lesson.student.map(student => student.fullName).join(', ')}</p>
      {/* Add more details as needed */}
    </div>

    </div>
      </div>
    </>
  );
};

export default LessonDetails;
