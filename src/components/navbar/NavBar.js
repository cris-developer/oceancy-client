import React, { Component } from 'react'
import {Nav,Navbar,Container }from "react-bootstrap";
import { Link } from "react-router-dom";
import './NavBar.css' 


class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar-wrapper">
       {/* <div classNmae="containerFluidMain"> */}
        <Navbar  bg="blue"  fixed='top' className="navBar">
          <Container>
            {/* <Navbar.Brand style ={{color:'white'}}> */}
            {/* style ={{color:'white'}} */}
              <Nav>
                  <Link to={"/"} className="nav-link" style ={{color:'black'}} >
                    OCEANCY
                  </Link>
                </Nav>
            {/* </Navbar.Brand> */}
            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/destinations"} className="nav-link" style ={{color:'black'}}>
                  DESTINATIONS
                </Link>
              </Nav>
              <Nav>
                <Link to={"/activities"} className="nav-link" style ={{color:'black'}}>
                  ACTIVITIES
                </Link>
              </Nav>
              <Nav>
                <Link to={"/profile"} className="nav-link" style ={{color:'black'}}>
                  PROFILE
                </Link>
              </Nav>
              <Nav>
                <Link to={"/members"} className="nav-link" style ={{color:'black'}}>
                  MEMBERS
                </Link>
              </Nav>
              {/* <Nav>
                <Link to={"/"} className="nav-link" style ={{color:'white'}}>
                  Home
                </Link>
              </Nav> */}
              <Nav>
                  {/* {this.props.authenticated && (
                    <Link className="nav-link" to={"/"} onClick={this.props.handleLogout} style ={{color:'white'}}>
                    Logout 
                  </Link>)} */}
                    {/* <Link to={"/"} className="nav-link">
                      Log out
                    </Link> */}
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      {/* </div> */}
    </div>
    
    )
  }
}
export default NavBar






