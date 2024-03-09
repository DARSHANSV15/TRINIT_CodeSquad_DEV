import React, { useState } from 'react';

const TutorForm = ({ onSubmit }) => {
  const initialTutorState = {
    fullName: '',
    DOB: '',
    gender: '',
    contact: '',
    qualification: '',
    experience: '',
    languages: '',
  };

  const [tutor, setTutor] = useState(initialTutorState);

  const handleTutorChange = (e) => {
    const { name, value } = e.target;
    setTutor((prevTutor) => ({
      ...prevTutor,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const languagesArray = tutor.languages.split(',').map((language) => language.trim());

    const tutorObject = {
      fullName: tutor.fullName,
      DOB: tutor.DOB,
      gender: tutor.gender,
      contact: tutor.contact,
      qualification: tutor.qualification,
      experience: tutor.experience,
      languages: languagesArray,
    };

    onSubmit(tutorObject);
    setTutor(initialTutorState);
  };

  return (<>
    
                             <h2>Additional details</h2>
                             <div className="form-group">
                                 <label htmlFor="fullName">Full Name:</label>
                                 <input
                                     type="text"
                                     id="fullName"
                                     name="fullName"
                                     value={tutor.fullName}
                                     className="form-control"
                                     onChange={handleTutorChange}
                                     required
                                 />
                             </div>

                             <div className="form-group">
                                 <label htmlFor="dob">Date of Birth:</label>
                                 <input
                                     type="date"
                                     id="dob"
                                     name="DOB"
                                     value={tutor.DOB}
                                     className="form-control"
                                     onChange={handleTutorChange}
                                 />
                             </div>

                             <div className="form-group">
                                 <label htmlFor="gender">Gender:</label>
                                 <select
                                     id="gender"
                                     name="gender"
                                     value={tutor.gender}
                                     className="form-control"
                                     onChange={handleTutorChange}
                                 >
                                     <option value="">Select Gender</option>
                                     <option value="male">Male</option>
                                     <option value="female">Female</option>
                                     <option value="others">Others</option>
                                 </select>
                             </div>

                             <div className="form-group">
                                 <label htmlFor="contact">Contact:</label>
                                 <input
                                     type="text"
                                     id="contact"
                                     name="contact"
                                     value={tutor.contact}
                                     className="form-control"
                                     onChange={handleTutorChange}
                                 />
                             </div>

                             <div className="form-group">
                                 <label htmlFor="qualification">Qualification:</label>
                                 <input
                                     type="text"
                                     id="qualification"
                                     name="qualification"
                                     value={tutor.qualification}
                                     className="form-control"
                                     onChange={handleTutorChange}
                                 />
                             </div>

                             <div className="form-group">
                                 <label htmlFor="experience">Experience (years):</label>
                                 <input
                                     type="number"
                                     id="experience"
                                     name="experience"
                                     value={tutor.experience}
                                     className="form-control"
                                     onChange={handleTutorChange}
                                 />
                             </div>

                             <div className="form-group">
                                 <label htmlFor="languages">Languages (comma-separated):</label>
                                 <input
                                     type="text"
                                     id="languages"
                                     name="languages"
                                     value={tutor.languages}
                                     className="form-control"
                                     onChange={handleTutorChange}
                                     required
                                 />
                             </div>

      <button type='button' className="btn btn-primary mt-3" onClick={handleSubmit}>
        Submit Tutor Form
      </button>
 
    </>
  );
};

export default TutorForm;
