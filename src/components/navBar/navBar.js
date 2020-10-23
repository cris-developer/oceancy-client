import React from 'react';
import {Nav,Navbar,Container,Row,Col }from "react-bootstrap";

import './NavBar.css'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
        <Navbar bg="green" variant="dark" fixed='top'>
          <Container>
            <Navbar.Brand>
               OCEANCY
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/destinations"} className="nav-link">
                  Destinations
                </Link>
              </Nav>
              <Nav>
                <Link to={"/activities"} className="nav-link">
                  Activities
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
    </div>
  )
}

export default NavBar


