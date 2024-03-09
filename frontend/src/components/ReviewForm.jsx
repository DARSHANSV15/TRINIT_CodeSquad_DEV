import React, { useState } from 'react';

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic (e.g., send data to a server)

    // For this example, let's just log the form data
    console.log({ name, rating, comment });

    // Reset form fields
    setName('');
    setRating(0);
    setComment('');
  };

  return (
    <div className="container mt-2">
      <h4 className="mb-2">About the Session</h4>
      <form onSubmit={handleSubmit}>
        <div className="row mb-2">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name: </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="rating" className="form-label">Rate :</label>
            <select
              className="form-select"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
            <label htmlFor="comment" className="form-label">Your Review</label>
            <textarea
              className="form-control"
              id="comment"
              rows="4"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">Submit Review</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
