import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import "../../public/css/mainCnt.css"

const Home = ({user}) => {
  
  return (<>
    <Navbar user={user} ></Navbar>
    
    <div className='main-cnt-flex'>
        <Sidebar user={user}></Sidebar>
        <div className='main-cnt'></div>
    </div>
  </>
  )
}

export default Home