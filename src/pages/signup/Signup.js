import React from "react";
import { signup } from "../../services/userService";
import { Link } from "react-router-dom";
import {Form, Button} from 'react-bootstrap'

class Signup extends React.Component {
  state = {
    fullName: "",
    email: "",
    password: "",
    errorMessage: "",
  };
 
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    signup({
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password,
    })
      .then((response) =>
        response.accessToken
          ? (localStorage.setItem("accessToken", response.accessToken),
            this.props.authenticate(response.user), //where you call authenticate from App.js
            this.props.history.push("/"))
          : this.setState({
              errorMessage: response.errorMessage,
            })
      )
      .catch((err) => console.log(err));
  };

  render() {
    const { fullName, email, password, errorMessage } = this.state;
    return (
      <div>
        {errorMessage !== "" && errorMessage}
        {/* <form onSubmit={this.handleSubmit}> */}
          {/* <label>Full name: </label>
          <div className="formContainer">
          <input
            name="fullName"
            value={fullName}
            onChange={this.handleChange}
            required={true}
            type="text"
          />
          <label>Email: </label>
          <input
            name="email"
            value={email}
            onChange={this.handleChange}
            required={true}
            type="email"
          />
          <label>Password: </label>
          <input
              name="password"
              type="password"
              value={password}
              onChange={this.handleChange}
              required={true}
          />
          <button type="submit"> Sign up </button>
          <Link to={"/login"} >
                Log in
          </Link>
          <div> 
          </form> */}

          <div className='banner'>
                 <h2 className='headerText'>Signup</h2>
          </div>
          <Form className="formContainer" onSubmit={this.handleSubmit}>
            <Form.Group controlId="formGridfullName" >
              <Form.Label>Full Name</Form.Label>
              <Form.Control  name="fullName"  value={fullName} onChange={this.handleChange} required={true} type="text"placeholder="your name.." />
            </Form.Group>

          
            <Form.Group  controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" value={email} onChange={this.handleChange} required={true} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group  controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control  name="password" type="password"value={password} onChange={this.handleChange} required={true}placeholder="Password" />
            </Form.Group>
          
            <Button variant="primary" type="submit">
              Submit
            </Button>

              <Link to={"/login"} >
                    Log in
              </Link>
           </Form>

       
      </div>
    );
  }
}

export default Signup;
