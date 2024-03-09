import { useState,useEffect } from 'react'
import { Route,Routes, useNavigate,Navigate } from 'react-router-dom';
import axios from 'axios';
import { BACK_URL } from "../config"

import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import UserForm from './pages/UserForm';
import Login from './pages/Login';
import Signup from './pages/Signup';



function App() {
  const navigate= useNavigate();
  let [user,setUser] = useState(null);

  useEffect(()=>{
    const getUser=()=>{
      fetch(BACK_URL+"/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type":"application/json",
          "Access-Control-Allow-Credentials": true
        }
      })
      .then((res)=>{
        if(res.status===200){
          return res.json();
          // setUser(res.data.user); 
        } else{
          throw new Error("authentication error");
        }
      })
      .then((resObj)=>{
        setUser(resObj.user);
        console.log(resObj);
      })
      .catch((e)=>{
        console.log(e.message);
      })
    }
    getUser();
  },[])

  
  return (
    <Routes>
      <Route path='/' element={<Home user={user}/>}/>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/dashboard' element={user ? <Dashboard user={user} /> : <Navigate to="/login" />}/>
      <Route path='/role' element={<UserForm />}/>
    </Routes>
  )
}

export default App
