// components/LessonDetails.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BACK_URL } from '../../config';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ReviewForm from '../components/ReviewForm';


const LessonDetails = ({user}) => {
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

  function calculateAge(dob) {
    const currentDate = new Date();
    const birthDate = new Date(dob);
  
    if (isNaN(birthDate.getTime())) {
      return 'Invalid Date';
    }
  
    let age = currentDate.getFullYear() - birthDate.getFullYear();
  
    // Check if the birthday has occurred for this year
    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }
  
    return age;
  }
  

  console.log(user);
  return (
    <>
      <Navbar user={user}></Navbar>
      <div className='main-cnt-flex'>
        <Sidebar user={user}></Sidebar>
        <div className='main-cnt'>
    <div className='m-2 border p-3'>
      <h4>{lesson.title}</h4>
      <p>Description: {lesson.description}</p>
      <p>Scheduled Time: {new Date(lesson.scheduledTime).toLocaleString()}</p>
      <p>Duration: {lesson.duration} hours</p>
      <p>Price: {lesson.price} .Rs</p>
      <p>Language: {lesson.language}</p>
      {/* Add more details as needed */}
    </div>

    <button className='btn btn-primary m-1 mx-3'>Register</button>
<button className='btn btn-primary m-1 mx-3'>Join Session</button>

    <div className="card m-2" style={{ width: "28rem" }}>

  <div className="card-body">
    <h4 className='mb-0'>About Tutor</h4>
    <hr />
    <h5 className="card-title">{lesson.tutor.fullName}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{lesson.tutor.qualification}</h6>
    <p className="card-text">Experience: {lesson.tutor.experience}</p>
    <p className="card-text">Age: {calculateAge(lesson.tutor.DOB)}</p>
    <ul className="list-group mb-2">
      <strong>Languages:</strong>
      {lesson.tutor.languages.map((ele) => (
        <li key={ele} className="list-group-item">{ele}</li>
      ))}
    </ul>
    <a href="#" className="card-link"><i className="fa-solid fa-phone"></i> Contact</a>
  </div>
</div>
<hr />
<ReviewForm></ReviewForm>
    </div>
      </div>
    </>
  );
};

export default LessonDetails;
