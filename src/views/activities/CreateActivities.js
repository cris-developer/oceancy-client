import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import { createActivity,uploadImagesCreate } from '../../services/activityService';
import {fileService} from '../../services/fileService';
import axios from "axios"

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

   
  handleFileUpload = e => {
    const uploadData = new FormData()
    uploadData.append("image", e.target.files[0])
    this.filesService.handleUpload(uploadData)
        .then(response => this.setState({ photoUrl: response.data.secure_url }))
        .catch(err => {console.log('Error while uploading the image:',err)})
  }
  //new FormData().append('image',photoUrl)=uploadData

  createImageUpload = e => {  
    console.log("The file to be uploaded is: ", e.target.files[0]);
    ////UploadData.append("photoUrl", e.target.files[0]);
    //uploadImagesCreate(e.target.files[0])
    fileService(e.target.files[0])
    .then(response => {
      console.log(response);
      this.setState({ photoUrl: response.path });
    })
    .catch(err => {console.log('Error while uploading the image:',err)})

    // () => {}
    // (response) => {}
    // response => {}
    // response => this.setState({ photoUrl: response.path })
    // response => { return this.setState({ photoUrl: response.path }) }
}
      // .then((res) => addImage(res));
    
    // .then(response => {
    //     console.log('RESPONSE ON CREATING COMPONENT: ', response);
    //     // after the console.log we can see that response carries 'secure_url' which we can use to update the state 
    //     this.setState({ photoUrl: response.secure_url });
    //     console.log ('UPLOADING IMAGES:',response.secure_url )
    //   })
    //   .catch(err => {
    //     console.log("Error while uploading the file: ", err);
    //   });




   

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
  };

  render() {

    const {name,description,address,startDate,endDate,photoUrl}=this.state;
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.addActivitySubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name"  value={this.state.name} onChange={this.createInputChange} />
          </Form.Group>

          <Form.Group controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="description"  name="description" value={this.state.description} onChange={this.createInputChange} />
          </Form.Group>

          <Form.Group controlId="Address">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name="address" value={this.state.address} onChange={this.createInputChange} />
          </Form.Group>

          <Form.Group controlId="startDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="text" name="startDate" value={this.state.startDate} onChange={this.createInputChange} />
          </Form.Group>

          <Form.Group controlId="endDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="text" name="endDate"value={this.state.endDate} onChange={this.createInputChange} />
          </Form.Group>

          <Form.Group controlId="Duration">
            <Form.Label>Duration</Form.Label>
            <Form.Control type="text" name="duration"value={this.state.duration} onChange={this.createInputChange} />
          </Form.Group>

          <Form.Group controlId="Destination">
            <Form.Label>Destination</Form.Label>
            <Form.Control type="text" name="destination" value={this.state.destination} onChange={this.createInputChange} />
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
