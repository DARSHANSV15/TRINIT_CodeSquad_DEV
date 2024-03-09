import React,{useState} from 'react';
import "../../public/css/login.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


import { BACK_URL } from '../../config';

// 
const Signup = () => {
    let [user,setUser] =useState({username:"", password:"",email:""});

    const navigate=useNavigate();


      let localSignup=(user)=>{
        axios({
            method: 'post',
            url: BACK_URL+"/signup",
            headers: {
                
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            data: {
              ...user
            },
          }) .then((res)=>{
            console.log(res);
            navigate("/");
          }) .catch((err)=>{
            console.log(err);
          })
      
      }

    let handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(user);
        localSignup(user);
        setUser({username:"", password:"",email:""});
    }  

    let handleChange=({target:{name,value}})=>{
        let newUser={
          ...user,
          [name]: value
        }
        setUser(newUser);
      
      }



    return (
        <>
            <div className='login-contain'>
                <img src="/assets/loginImg2.avif" className="login-img" salt="login image" />

                <div className='login-form'>
                    <h2><i className="fa-solid fa-key mx-1"></i> Sign Up</h2>

                    <div className="card-body">
                        <hr />
                        <form noValidate className="needs-validation" method="POST" onSubmit={handleSubmit}>
                            
                            <div className="mb-1">
                                <label htmlFor="username" className="form-label">Username: </label>
                                <div className="input-group mb-1">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" required id="username" name="username" value={user.username} onChange={handleChange} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div className="invalid-feedback">Enter username</div>
                            </div>
                            <div className='mb-1'>
                                <label htmlFor="email" className='form-label'>Email: </label>
                                <input type="email" required id='email' name='email' value={user.email} onChange={handleChange} className='form-control' placeholder='email'/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password: </label>
                                <input type="password" required placeholder="Password" id="password" className="form-control" name="password" value={user.password} onChange={handleChange}/>
                                <div className="invalid-feedback">Enter Password</div>
                            </div>
                            <button className="edit-btn btn btn-primary mb-2">SUBMIT</button>
                        
                        </form>

                        <Link to={"/login"} style={{ color: "black" }}>Already logged in?</Link>
                        
                        <hr />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Signup