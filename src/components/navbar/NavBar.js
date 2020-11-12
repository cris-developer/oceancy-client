import React, { Component } from 'react'
import {Nav,Navbar,Container }from "react-bootstrap";
import { Link } from "react-router-dom";
import './NavBar.css' 


class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar-wrapper">
       
        <Navbar  bg="blue"  fixed='top' className="navBar justify-content-end">
          <Container>
            {/* <Navbar.Brand style ={{color:'white'}}> */}
            {/* style ={{color:'white'}} */}
              <Nav>
                  <Link to={"/"} className="nav-link" style ={{color:'white', fontSize:'40px', fontWeight:'300',fontFamily: 'Playfair Display',fontStyle:'italic'}} >
                    OCEANCY
                  </Link>
                </Nav>
            {/* </Navbar.Brand> */}
            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/destinations"} className="nav-link" style ={{color:'white'}}>
                  DESTINATIONS
                </Link>
              </Nav>
              <Nav>
                <Link to={"/activities"} className="nav-link" style ={{color:'white'}}>
                  ACTIVITIES
                </Link>
              </Nav>
              <Nav>
                <Link to={"/profile"} className="nav-link" style ={{color:'white'}}>
                  PROFILE
                </Link>
              </Nav>
              <Nav>
                <Link to={"/members"} className="nav-link" style ={{color:'white'}}>
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






