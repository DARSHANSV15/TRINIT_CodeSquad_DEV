import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Dashboard = ({user}) => {
  return (<>
    <Navbar user={user}></Navbar>
    <div className='main-cnt-flex'>
        <Sidebar user={user}></Sidebar>
        <div className='main-cnt'></div>
    </div>
  </>
  )
}

export default Dashboard