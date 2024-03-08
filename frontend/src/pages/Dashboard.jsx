import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (<>
    <Navbar></Navbar>
    <div className='main-cnt-flex'>
        <Sidebar></Sidebar>
        <div className='main-cnt'></div>
    </div>
  </>
  )
}

export default Dashboard