import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user}) => {
    // console.log(user);
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-light-subtle" style={{ lineHeight: "3rem" }}>
            <div className="container-fluid">
                <button className="navbar-toggler btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <i className="fa-solid fa-bars" style={{ fontSize: "1.25rem" }}></i>
                </button>
                <a className="navbar-brand text-primary" href="/">Lingua Connect</a>
                
                    {(!user )?<div className="ms-5 ps-5 login-signup" >
                    <Link className='btn btn-outline-primary m-1 ms-5' to={"/signup"}>Sign Up</Link>
                    <Link className='btn btn-outline-primary m-1' to={"/login"}>Log In</Link>
                    </div>: <div className='btn btn-outline-dark rounded-pill'><img src={user.photo} alt="" referrerPolicy="no-referrer" style={{height:"2rem",width:"2rem",margin:"0px",borderRadius:"50%"}}/> {user.username}</div>}
                    
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <div className='sidebar-nav'>
                        <ul className="list-group mt-2 border-bottom">
                            <Link className="list-group-item btn btn-light btn-primary-hover" to={"/"}><i className="fa-solid fa-house" style={{ fontSize: "1.2rem" }}></i> <span>Home</span></Link>
                            <Link className="list-group-item btn btn-light" to={"/dashboard"}><i className="fa-solid fa-gauge" style={{ fontSize: "1.2rem" }}></i> <span>Dashboard</span></Link>
                            <Link className="list-group-item btn btn-light" to={"/logout"}><i className="fa-solid fa-arrow-right-from-bracket" style={{ fontSize: "1.2rem" }}></i> <span>Logout</span></Link>
                        </ul>
                        <ul className="list-group border-bottom">
                            <Link className="list-group-item btn btn-light" to={"/lesson"}>Lessons</Link>
                            <Link className="list-group-item btn btn-light" to={"/lesson/create"}>Add lessons</Link>
                            <Link className="list-group-item btn btn-light">A third item</Link>
                            <Link className="list-group-item btn btn-light">A fourth item</Link>
                            <Link className="list-group-item btn btn-light">And a fifth one</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar