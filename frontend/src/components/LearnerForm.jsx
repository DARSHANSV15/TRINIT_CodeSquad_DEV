import React, { useState } from 'react';

const LearnerForm = ({ onSubmit }) => {
  const initialLearnerState = {
    // Add learner form fields here
  };

  const [learner, setLearner] = useState(initialLearnerState);

  const handleLearnerChange = (e) => {
    // Handle learner form field changes similarly
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(learner);
    setLearner(initialLearnerState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
                                 <label htmlFor="fullName">Full Name:</label>
                                 <input
                                     type="text"
                                     id="fullName"
                                     name="fullName"
                                    //  value={tutor.fullName}
                                     className="form-control"
                                    //  onChange={handleTutorChange}
                                     required
                                 />
                             </div>
      <button type="submit" className="btn btn-primary mt-3">
        Submit Learner Form
      </button>
    </form>
  );
};

export default LearnerForm;
