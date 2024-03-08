import React from 'react'
import "../../public/css/sidebar.css"
import { Link } from 'react-router-dom'
import { BACK_URL } from '../../config'

const Sidebar = () => {
  let logout=()=>{
    window.open(BACK_URL+"/logout","_self");
  }
  return (
    <>
      <div className='sidebar'>
        <ul className="list-group border-bottom">
          <Link className="list-group-item btn btn-light btn-primary-hover" to={"/"}><i className="fa-solid fa-house" style={{fontSize:"1.2rem"}}></i> <span>Home</span></Link>
          <Link className="list-group-item btn btn-light" to={"/dashboard"}><i className="fa-solid fa-gauge" style={{fontSize:"1.2rem"}}></i> <span>Dashboard</span></Link>
          <Link className="list-group-item btn btn-light" onClick={logout} ><i className="fa-solid fa-arrow-right-from-bracket" style={{fontSize:"1.2rem"}}></i> <span>Logout</span></Link>
        </ul>
        <ul className="list-group border-bottom">
          <Link className="list-group-item btn btn-light">An item</Link>
          <Link className="list-group-item btn btn-light">A second item</Link>
          <Link className="list-group-item btn btn-light">A third item</Link>
          <Link className="list-group-item btn btn-light">A fourth item</Link>
          <Link className="list-group-item btn btn-light">And a fifth one</Link>
        </ul>
      </div>

    </>
  )
}

export default Sidebar