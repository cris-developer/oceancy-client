import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import { createActivity,uploadImage } from '../../services/activityService';


export default class ActivitiesCreate  extends Component {
  
    // Setting up state
    state = {
      name: '',
      description: '',
      address: '',
      startDate: '',
      endDate: '',
      duration: '',
      destination: '',
      price: '',
      type: '',
      photoUrl:''
      }
     
  createInputChange =  (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

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
    

 // SUBMIT THE FORM

  addActivitySubmit = (e) => {
    e.preventDefault();
    const activity= {
      name: this.state.name,
      description: this.state.description,
      address:this.state.address,
      startDate:this.state.startdDate,
      endDate:this.state.endDate,
      duration:this.state.duration,
      destination:this.state.destination,
      price:this.state.price,
      type:this.state.type,
      photoUrl:this.state.photoUrl,
    }
  
    createActivity(activity).then((response) => {
      
      this.setState({
      name: '',
      description: '',
      address: '',
      startDate: '',
      endDate: '',
      duration: '',
      destination: '',
      price: '',
      type: '',
      photoUrl:''
  
      });
    });
    this.props.history.push('/activities')
  };

  render() {

    const {name,description,address,startDate,endDate,duration, destination,photoUrl}=this.state;
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.addActivitySubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name"  value={name} onChange={this.createInputChange} />
          </Form.Group>

          <Form.Group controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="description"  name="description" value={description} onChange={this.createInputChange} />
          </Form.Group>

          <Form.Group controlId="Address">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name="address" value={address} onChange={this.createInputChange} />
          </Form.Group>

          <Form.Group controlId="startDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="text" name="startDate" value={startDate} onChange={this.createInputChange} />
          </Form.Group>

          <Form.Group controlId="endDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="text" name="endDate"value={endDate} onChange={this.createInputChange} />
          </Form.Group>

          <Form.Group controlId="Duration">
            <Form.Label>Duration</Form.Label>
            <Form.Control type="text" name="duration"value={duration} onChange={this.createInputChange} />
          </Form.Group>

          <Form.Group controlId="Destination">
            <Form.Label>Destination</Form.Label>
            <Form.Control type="text" name="destination" value={destination} onChange={this.createInputChange} />
          </Form.Group>

          <Form.Group controlId="Price">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" name="price" value={this.state.price} onChange={this.createInputChange} />
          </Form.Group>

          <Form.Group controlId="Type">
            <Form.Label>Type</Form.Label>
            <Form.Control type="text" name="type" value={this.state.type} onChange={this.createInputChange} />
          </Form.Group>

          <Form.Group controlId="Image">
            <Form.Label>Image Upload</Form.Label>
            <Form.Control type="file" name="image" onChange={this.createImageUpload} />
          </Form.Group>
                    
          <Button variant="primary" size="lg" block="block" type="submit">
            Create Activity
          </Button>
        </Form>
      </div>
      );
  }
}
