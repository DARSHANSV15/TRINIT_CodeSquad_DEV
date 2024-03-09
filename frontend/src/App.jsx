import { useState,useEffect } from 'react'
import { Route,Routes, useNavigate,Navigate } from 'react-router-dom';
import axios from 'axios';
import { BACK_URL } from "../config"

import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import UserForm from './pages/UserForm';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreateLesson from './pages/CreateLesson';
import IndexLesson from './pages/IndexLesson';
import LessonDetails from './pages/LessonDetails';


function App() {
  const navigate= useNavigate();
  let [user,setUser] = useState(null);
  let [newUser,setNewUser] = useState(false);

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
        setNewUser(true);
      })
    }
    getUser();
  },[])

  
  if (user === null && !newUser ) {
    return null;
  }
  

  return (
    <Routes>
      <Route path='/' element={<Home user={user}/>}/>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/dashboard' element={user ? <Dashboard user={user} /> : <Navigate to="/login" />}/>
      <Route path='/role' element={<UserForm user={user}/>}/>
      <Route path='/lesson/create' element={<CreateLesson user={user} />}/>
      <Route path='/lesson' element={<IndexLesson user={user}/>}/>
      <Route path="/lesson/:lessonId" element={<LessonDetails user={user}/>} />
    </Routes>
  )
}

export default App
