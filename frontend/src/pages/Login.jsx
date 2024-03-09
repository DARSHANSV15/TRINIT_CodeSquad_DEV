import React,{useState} from 'react';
import "../../public/css/login.css"
import { Link, useNavigate  } from 'react-router-dom';
import axios from 'axios';


import { BACK_URL } from '../../config';

// 
const Login = () => {

  const navigate = useNavigate();

    let [user,setUser] =useState({username:"", password:""});

    let googleLogin=()=>{
        window.open(BACK_URL+"/auth/google","_self");
      }
      
      let githubLogin=()=>{
        window.open(BACK_URL+"/auth/github","_self");
      }

      let localLogin=(user)=>{
        axios({
            method: 'post',
            url: BACK_URL+"/login",
            headers: {
                
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            withCredentials: true
            ,
            data: {
              ...user
            },
          }) .then((res)=>{
            navigate('/');
          }) .catch((err)=>{
            console.log(err);
          })
      
      }

    let handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(user);
        localLogin(user);
        setUser({username:"", password:""});
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
                    <h2><i className="fa-solid fa-key mx-1"></i> Login</h2>

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
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password: </label>
                                <input type="password" required placeholder="Password" id="password" className="form-control" name="password" value={user.password} onChange={handleChange}/>
                                <div className="invalid-feedback">Enter Password</div>
                            </div>
                           
                            <button className="edit-btn btn btn-primary mb-2">SUBMIT</button>
                        
                        </form>

                        <Link to={"/signup"} style={{ color: "black" }}>New User?</Link>
                        
                        <hr />

                        <button className='btn btn-danger mx-1 rounded-pill' onClick={googleLogin}>Google</button>
                        <button className='btn btn-dark mx-1 rounded-pill' onClick={githubLogin}>GitHub</button>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Login