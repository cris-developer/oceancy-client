import React, {Component} from 'react';
import { profileEdit} from '../../services/userService'
import {Form, Button,Col} from 'react-bootstrap'

export class EditProfile extends React.Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    photoUrl :'',
    favoriteActivity :'',
    errorMessage: '',
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    profileEdit({
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password,
      photoUrl: this.state.photoUrl,
      favoriteActivity:this.state.favoriteActivity

    })
      .then((response) =>
       
         this.setState({
              errorMessage: response.errorMessage,
            })
      )
      .catch((err) => console.log(err));
  };

  render() {
    const { fullName, email, password, photoUrl,favoriteActivity } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <Form>  
              <Form.Group controlId="formGridfullName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control  name="fullName" value={fullName} type="text" onChange={this.handleChange} />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name ="email" value={email} type="email" onChange={this.handleChange}  />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  name ="password"  value={password} type="password" onChange={this.handleChange}  />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  {/* <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group> */}

                  <Form.Group as={Col} controlId="formGridFavoriteActivity">
                    <Form.Label>Favorite Activity</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridLevel">
                    <Form.Label>Level </Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">
                  Edit Profile
                </Button>
              </Form>

          {/* <Form>
          <Form.Label>fullName: </Form.Label>
                <input
                  name="fullName"
                  value={fullName}
                  onChange={this.handleChange}
                  type="text"
                />
            <label>Email: </label>
            <input
              name="email"
              value={email}
              onChange={this.handleChange}
              type="email"
            />
            <label>Password: </label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={this.handleChange}
            />
            <label>Favorite Activity: </label>
            <input
              name="favoriteActivity"
              type="favoriteActivity"
              value={favoriteActivity}
              onChange={this.handleChange}
            />
            <br /> 
            </Form>
            */}
            {/* <Button variant="primary" type="submit">
                  Edit Profile
                </Button>
           */}
        </form>
      </div>
    );
  }
}

export default EditProfile;





