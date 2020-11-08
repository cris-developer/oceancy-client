import React, {Component} from 'react';
import {Form, Button,Col} from 'react-bootstrap'
import { profileEdit,uploadImage,getProfile } from '../../services/userService';
import './EditProfile.css'

export class EditProfile extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    photoUrl :'',
    favoriteActivity:'',
    level :'',
    errorMessage: '',
    
  };



  componentDidMount() {    
    
    console.log ('GETTING ON CLIENT SIDE EDITING AN ACTIVITY')
  getProfile()
      .then(editingProfile => {
          this.setState({ 
            fullName: editingProfile.fullName,
            email: editingProfile.email,
            password: editingProfile.password,
            photoUrl: editingProfile.photoUrl,
            favoriteActivity: editingProfile.favoriteActivity,
            level: editingProfile.level
            });
        console.log(editingProfile);
      })
      .catch((err)=>{
          console.log(err)
      })
}

  
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  
  // UPLOADING THE IMAGES

  createImageUpload = e => {  
    console.log("The file to be uploaded is: ", e.target.files[0]);
    uploadImage(e.target.files[0])
    .then(response => {
      console.log(response);
      this.setState({ photoUrl: response.path });
    })
    .catch(err => {console.log('Error while uploading the image:',err)})

    }
   
    handleSubmit = (e) => {
      console.log ('I AM UPDATING THE USER PROFILE')
      e.preventDefault();
      
      const user= {
        fullName: this.state.fullName,
        email :this.state.email,
        password :this.state.password,
        favoriteActivity:this.state.favoriteActivity,
        photoUrl:this.state.photoUrl,
        level:this.state.level
      }
      //const {params}  = this.props.match 
  
      console.log ('I AM RENDERING THE UPDATED USER PROFILE', user)
     
      profileEdit(user)
      .then((response) => {
        console.log (response)
        this.props.history.push('/profile')
      }).catch ((error=> {
        console.log(error)
      }))
      
    };


  
  render() {
    const { fullName, email, password, photoUrl,favoriteActivity,level } = this.state;
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}> */}
            <div className='banner'>
                 <h2 className='headerText'>Profile Settings</h2>
            </div>
            <Form className="formContainer"  onSubmit={this.handleSubmit}>  
              <Form.Group controlId="formGridfullName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control  name="fullName" value={fullName} type="text" placeholder={fullName} onChange={this.handleChange} />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name ="email" value={email} type="email"   placeholder={email}  onChange={this.handleChange}  />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  name ="password"  value={password} type="password"  placeholder={password} onChange={this.handleChange}  />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  {/* <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group> */}

                  <Form.Row>
                    <label> Favorite Activity
                      {/* <select multiple={true} value={['Diving','Sailing','Surfing','Kite Surfing']} */}
                      <select
                          type="search"
                          name= 'favoriteActivity'
                          value={favoriteActivity}
                          onChange={this.handleChange}
                          >
                          <option value="Diving">Diving</option>
                          <option value="Sailing">Sailing</option>
                          <option value="Surfing">Surfing</option>
                          <option value="Kite Surfing">Kite Surfing</option>
                      </select>
                    </label>
                  </Form.Row>

                  {/* <Form.Group as={Col} controlId="formGridFavoriteActivity">
                    <Form.Label>Favorite Activity</Form.Label>
                    <Form.Control  name ="favoriteActivity"  value={favoriteActivity} type="text" onChange={this.handleChange} as="select" defaultValue="Choose... ">
                      <option>Choose...</option>
                      <option value="Diving">Diving</option>
                      <option value="Sailing">Sailing</option>
                      <option value="Surfing">Surfing</option>
                      <option value="Kite Surfing">Kite Surfing</option>
                    </Form.Control>
                  </Form.Group> */}
                  <Form.Group as={Col} controlId="formGridLevel">
                    <Form.Label>Level </Form.Label>
                    <Form.Control type="search" name="level" value={level} onChange={this.handleChange} as="select" defaultValue="none">
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </Form.Control>
                  </Form.Group> 
                </Form.Row>

                
                    <label> Level
                      {/* <select multiple={true} value={['Diving','Sailing','Surfing','Kite Surfing']} */}
                      <select
                          type="search"
                          name= 'level'
                          value={level}
                          onChange={this.handleChange}
                          >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                      </select>
                    </label>
                  


                <Form.Group controlId="Image">
                  <Form.Label>Image Upload</Form.Label>
                  <Form.Control type="file" name="image" onChange={this.createImageUpload} />
                </Form.Group>

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
        {/* </form> */}
      </div>
    );
  }
}

export default EditProfile;





