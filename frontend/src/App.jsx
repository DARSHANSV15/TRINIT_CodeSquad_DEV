import { useState,useEffect } from 'react'
import { Route,Routes } from 'react-router-dom';
import axios from 'axios';
import { BACK_URL } from "../config"

import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';



function App() {
  
  let[user,setUser]=useState(null);

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

  console.log(user);

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
  )
}

export default App
