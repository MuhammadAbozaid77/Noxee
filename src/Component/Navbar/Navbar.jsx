import React from 'react';
import { Link } from 'react-router-dom';



export default function Navbar({userDataDecode , logOut}) {
  return <>

  <nav className="navbar navbar-expand-lg bg-color">
  <div className="container">
    <Link className="navbar-brand fw-bold" to=""> NOXE </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        { userDataDecode ?
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="movies"> Movies </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="tvshow"> TvShow </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="people"> People  </Link>
                      </li>
                    </> 
                    : ""
        }

      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-3">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          </form>
        </li>
        <li className="nav-item d-flex me-3">
          <Link className="nav-link " to=""> <i className="fa-brands fa-facebook"></i> </Link>
          <Link className="nav-link " to=""> <i className="fa-brands fa-spotify"></i> </Link>
          <Link className="nav-link " to=""> <i className="fa-brands fa-instagram"></i> </Link>
          <Link className="nav-link " to=""> <i className="fa-brands fa-youtube"></i> </Link>
        </li>
        { userDataDecode ?
            <>
              <li className="nav-item">
                <Link className="nav-link"  onClick={logOut} >  Logout </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="profile" > <i class="fa-solid fa-user"></i> </Link>
              </li>
            </> 
              :
            <>
            <li className="nav-item">
              <Link className="nav-link" to="register">  Register </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="login">  Login </Link>
            </li>
            </>
          }
      </ul>
    </div>
  </div>
</nav>

  </>
}

/* 

*/