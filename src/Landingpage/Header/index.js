import React from 'react'
import logo from "../../assets/logo.png"
import bwslogo from "../../assets/BWT_Logo_Color.jpg"
import { Container, Nav, NavDropdown } from 'react-bootstrap'
 import { NavLink } from 'react-router-dom'
 
function Navbar() {

  return (
    <div style={{  
      borderBottom: "0px solid #eccf63"
    }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12">
            <a href="/"><img src={logo} width="200" height="50" alt="Logo"/></a>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12">
            <nav className="navbar navbar-expand-lg  ">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mt-2  " style={{ marginLeft: "auto"}}> 
                   
                  <li className="nav-item  " style={{marginRight:"15px"}}>
                    <NavLink className="btn btn-outline   bnav-link" to="/">
                  Home  
                    </NavLink>
                  </li>
                  <li className="nav-item" style={{marginRight:"15px"}}>
                  <NavLink exact className="btn btn-outline  bnav-link" href="/">
                  Sign in  
                    </NavLink>
                  </li>
                  <li className="nav-item" style={{marginRight:"15px"}}>
                  <NavLink className="btn btn-outline  bnav-link" to="/create">
                  Register  
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12">
            <a href="/SabbathDay/Dashboard"><img src={bwslogo} width="200" height="72" alt="BWS Logo"/></a>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Navbar