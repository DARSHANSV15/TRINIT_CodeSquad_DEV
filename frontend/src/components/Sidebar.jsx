import React from 'react'
import "../../public/css/sidebar.css"
import { Link } from 'react-router-dom'
import { BACK_URL } from '../../config'

const Sidebar = ({user}) => {
  let logout=()=>{
    window.open(BACK_URL+"/logout","_self");
  }
  
  return (
    <>
      <div className='sidebar'>
        <ul className="list-group border-bottom">
          <Link className="list-group-item btn btn-light btn-primary-hover" to={"/"}><i className="fa-solid fa-house" style={{fontSize:"1.2rem"}}></i> <span>Home</span></Link>
          <Link className="list-group-item btn btn-light" to={"/dashboard"}><i className="fa-solid fa-gauge" style={{fontSize:"1.2rem"}}></i> <span>Dashboard</span></Link>
          {(user)?
          <Link className="list-group-item btn btn-light" onClick={logout} ><i className="fa-solid fa-arrow-right-from-bracket" style={{fontSize:"1.2rem"}}></i> <span>Logout</span></Link>
          :
          <h6>Please login to continue</h6>}
          
        </ul> 
        <ul className="list-group border-bottom">
          {(user.tutorID) ? 
          <>
            <Link className="list-group-item btn btn-light" to={"/lesson"}>Lessons</Link>
            <Link className="list-group-item btn btn-light" to={"/lesson/create"}>Add Lesson</Link>
            <Link className="list-group-item btn btn-light">A third item</Link>
          <Link className="list-group-item btn btn-light">A fourth item</Link>
          <Link className="list-group-item btn btn-light">And a fifth one</Link>
          </>
          : 
          <>
          
          <Link className="list-group-item btn btn-light" to={"/lesson"}>Lessons</Link>
            <Link className="list-group-item btn btn-light">A third item</Link>
          <Link className="list-group-item btn btn-light">A fourth item</Link>
          <Link className="list-group-item btn btn-light">And a fifth one</Link>
          </>}
          
          
          
        </ul>
      </div>

    </>
  )
}

export default Sidebar