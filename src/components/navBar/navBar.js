import React, { Component } from 'react'
import {Nav,Navbar,Container,Row,Col }from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './NavBar.css' 


class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar  bg="blue"  fixed='top' className="navBar">
          <Container>
            {/* <Navbar.Brand style ={{color:'white'}}> */}
              <Nav>
                  <Link to={"/"} className="nav-link" style ={{color:'white'}}>
                    OCEANCY
                  </Link>
                </Nav>
            {/* </Navbar.Brand> */}
            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/destinations"} className="nav-link" style ={{color:'white'}}>
                  Destinations
                </Link>
              </Nav>
              <Nav>
                <Link to={"/activities"} className="nav-link" style ={{color:'white'}}>
                  Activities
                </Link>
              </Nav>
              <Nav>
                <Link to={"/profile"} className="nav-link"style ={{color:'white'}}>
                  Profile
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
    </div>
    
    )
  }
}

export default NavBar







