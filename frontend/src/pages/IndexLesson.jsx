import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BACK_URL } from '../../config';
import LessonCard from '../components/LessonCard';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const IndexLesson = ({user}) => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    // Function to fetch lessons using Axios
    const fetchLessons = async () => {
      try {
        const response = await axios.get(BACK_URL+'/lesson'); // Replace with your server URL
        setLessons(response.data);
      } catch (error) {
        console.error('Error fetching lessons:', error.message);
      }
    };

    // Call the fetchLessons function
    fetchLessons();
  }, []); // The empty dependency array ensures that the effect runs only once after the initial render

  return (
    <>
      <Navbar user={user}></Navbar>
      <div className='main-cnt-flex'>
        <Sidebar user={user}></Sidebar>
        <div className='main-cnt'>
          <div>
            <h2>Lesson List</h2>
            <div className="row">
              
              
              
              
              {lessons.map((lesson) => (
                <div key={lesson._id} className="col-lg-4 col-xl-3 col-md-4 mb-4 col-sm-5">
                  <LessonCard
                    key={lesson._id}
                    _id={lesson._id}
                    title={lesson.title}
                    description={lesson.description}
                    scheduledTime={lesson.scheduledTime}
                    duration={lesson.duration}
                    videoCallLink={lesson.videoCallLink}
                    tutor={lesson.tutor}
                  />
                </div>
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexLesson;
