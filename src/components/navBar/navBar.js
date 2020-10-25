import React, { Component } from 'react'
import {Nav,Navbar,Container,Row,Col }from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './NavBar.css'


class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="green"  fixed='top' className="with-border">
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
              <Nav>
                <Link to={"/profile"} className="nav-link">
                  Profile
                </Link>
              </Nav>
              <Nav>
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </Nav>
              <Nav>
                  {this.props.authenticated && (
                    <Link className="nav-link" to={"/"} onClick={this.props.handleLogout}>
                    Logout 
                  </Link>)}
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




// function NavBar(props) {


//   return (
//     <div>
//         <Navbar bg="green"  fixed='top' className="with-border">
//           <Container>
//             <Navbar.Brand>
//                OCEANCY
//             </Navbar.Brand>
//             <Nav className="justify-content-end">
//               <Nav>
//                 <Link to={"/destinations"} className="nav-link">
//                   Destinations
//                 </Link>
//               </Nav>
//               <Nav>
//                 <Link to={"/activities"} className="nav-link">
//                   Activities
//                 </Link>
//               </Nav>
//               <Nav>
//                 <Link to={"/home"} className="nav-link">
//                   Home
//                 </Link>
//               </Nav>
//               <Nav>
//                 {this.props.authenticated && (
//               <Link to={"/"} onClick={this.props.handleLogout}>
//                 Logout
//               </Link>
//             )}
//               </Nav>
//             </Nav>

//           </Container>
//         </Navbar>
//     </div>
//   )
// }




