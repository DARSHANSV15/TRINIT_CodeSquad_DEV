import React, { useState } from 'react';
import axios from "axios"
import "../../public/css/UserForm.css"
import { BACK_URL } from '../../config'
import { useNavigate } from 'react-router-dom';

const UserForm = ({user}) => {

    const navigate=useNavigate();

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


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Tutor State:", tutor);
        sendTutorData(tutor);

        setTutor(initialTutorState);
    };

    const sendTutorData = async (tutorData) => {
        try {

            const languagesArray = tutorData.languages.split(',').map(language => language.trim());


            const tutorObject = {
                fullName: tutorData.fullName,
                DOB: tutorData.DOB,
                gender: tutorData.gender,
                contact: tutorData.contact,
                qualification: tutorData.qualification,
                experience: tutorData.experience,
                languages: languagesArray,
                userID: user._id,
            };


            axios({
                method: 'POST',
                url: BACK_URL + "/tutor/register",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                data: tutorObject, // Move this to the "data" property
            })
                .then((res) => {
                    console.log(res);
                    navigate("/");
                    return res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
            

        } catch (error) {
            console.error('Error submitting tutor data:', error);

            throw new Error('Error submitting tutor data');
        }
    };

    return (
        <>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
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

                            <button type="submit" className="btn btn-primary mt-3">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserForm;