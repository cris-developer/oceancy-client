import React from "react";
import { login } from "../../services/userService";
import { signup } from "../../services/userService";
import {Form,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = {
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
    login({
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password,
    })
      .then((response) =>
        response.accessToken
          ? (localStorage.setItem("accessToken", response.accessToken),
            this.props.authenticate(response.user),
            this.props.history.push("/"))
          : this.setState({
              errorMessage: response.errorMessage,
            })
      )
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { email, password, errorMessage } = this.state;
    return (
      <div>
        {errorMessage !== "" && errorMessage}
        <form onSubmit={this.handleSubmit}>
          {/* <label>Email: </label>
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
          <button type="submit"> Login </button>
          <Link to={"/signup"} >
                Sign Up
          </Link> */}

          <Form className="formContainer">
            <Form.Group  controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" value={email} onChange={this.handleChange} required={true} type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group  controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control  name="password" type="password"value={password} onChange={this.handleChange} required={true}placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
            Login
            </Button>

            <Link to={"/signup"} >
                  Sign up
            </Link>
          
         </Form>



        </form>
      </div>
    );
  }
}

export default Login;
