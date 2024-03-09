import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { BACK_URL } from '../../config';
import axios from 'axios';

const CreateLesson = ({user}) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        scheduledTime: '',
        duration: '',
        videoCallLink: '',
        
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        let data={...formData,tutor: user.tutorID};
        console.log(data);
      
        axios.post(BACK_URL + '/lesson/create', data)
          .then((response) => {
            // Log the server response (you can handle it according to your needs)
            console.log('Server response:', response.data);
          })
          .catch((error) => {
            // Handle error (e.g., show an error message to the user)
            console.error('Error creating lesson:', error.message);
          });
      };
      

    const getFormattedMinDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = `${(now.getMonth() + 1).toString().padStart(2, '0')}`;
        const day = `${now.getDate().toString().padStart(2, '0')}`;
        const hours = `${now.getHours().toString().padStart(2, '0')}`;
        const minutes = `${now.getMinutes().toString().padStart(2, '0')}`;

        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    return (<>
    
    <Navbar></Navbar>
    <div className='main-cnt-flex'>
        <Sidebar></Sidebar>
        <div className='main-cnt'>

        <div className=" mt-3">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 offset-md-3 border border-secondary-subtle">
                        <h2 className='my-3'>Add Lesson</h2>
                        <div className="form-group mb-3 ">
                            <label htmlFor="title" className=' mb-2'>Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="description" className=' mb-2'>Description</label>
                            <textarea
                                className="form-control"
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="scheduledTime" className=' mb-2'>Scheduled Time</label>
                            <input
                                type="datetime-local"
                                className="form-control"
                                id="scheduledTime"
                                name="scheduledTime"
                                value={formData.scheduledTime}
                                onChange={handleChange}
                                min={getFormattedMinDate()}
                                required
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="duration" className=' mb-2'>Duration (in minutes)</label>
                            <input
                                type="number"
                                className="form-control"
                                id="duration"
                                name="duration"
                                value={formData.duration}
                                onChange={handleChange}
                                min={10}
                                required
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="videoCallLink" className=' mb-2'>Video Call Link</label>
                            <input
                                type="text"
                                className="form-control"
                                id="videoCallLink"
                                name="videoCallLink"
                                value={formData.videoCallLink}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary mb-3">
                            Create Lesson
                        </button>
                    </div>
                </div>
            </form>
        </div>

        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam mollitia sint perferendis, non deleniti eum beatae corporis obcaecati eius debitis neque earum reprehenderit ex iusto libero in sit error similique cum repudiandae ratione ab? A odit officia sed cum similique.

        </div>
    </div>

        
        </>);
};

export default CreateLesson;
