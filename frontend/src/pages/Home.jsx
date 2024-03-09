import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import "../../public/css/mainCnt.css"

const Home = ({user}) => {
  return (<>
    <Navbar></Navbar>
    <h1>{user?`${ user.username}`:"none"}</h1>
    <div className='main-cnt-flex'>
        <Sidebar></Sidebar>
        <div className='main-cnt'></div>
    </div>
  </>
  )
}

export default Home