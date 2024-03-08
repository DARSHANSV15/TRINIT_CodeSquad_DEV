import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import "../../public/css/mainCnt.css"

const Home = () => {
  return (<>
    <Navbar></Navbar>
    <div className='main-cnt-flex'>
        <Sidebar></Sidebar>
        <div className='main-cnt'></div>
    </div>
  </>
  )
}

export default Home