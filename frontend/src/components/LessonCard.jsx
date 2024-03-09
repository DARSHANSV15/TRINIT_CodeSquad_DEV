import React from 'react';


const LessonCard = ({ _id,title, description, scheduledTime, duration, videoCallLink, tutor}) => {
    let price=1000;
    return (
    
    <div className="card m-3" style={{width: '18rem'}}>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">Tutor: {tutor.fullName}</h6>
      <p className="card-text">{description}</p>
      <p className="card-text"><strong>Scheduled Time:</strong> {scheduledTime}</p>
      <p className="card-text"><strong>Duration:</strong> {duration}</p>
      <p className="card-text"><strong>Price:</strong> Rs.{price}</p>
      {/* <a href={videoCallLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Join Video Call</a> */}
        <a href={"/lesson/"+_id} className='btn btn-primary' rel="noopener noreferrer">Details</a> 
    </div>
  </div>
  );
};

export default LessonCard;
