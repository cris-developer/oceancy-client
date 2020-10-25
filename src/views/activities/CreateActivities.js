import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import { createActivity } from '../../services/activityService';
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
      type: ''
      }
     
  createInputChange =  (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

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
      type:this.state.type
    }

    // axios.post('http://localhost:5000/activities/edit', activity)
    // .then(res => console.log(res));

    // this.setState({
    //     name: '',
    //     description: '',
    //     address: '',
    //     startDate: '',
    //     endDate: '',
    //     duration: '',
    //     destination: '',
    //     price: '',
    //    type: ''

    // });
  
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
      type: ''
      });
    });
  };

  render() {

    const {name,description,address,startDate,endDate}=this.state;
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

          <Form.Group controlId="">
            <Form.Label>Type</Form.Label>
            <Form.Control type="text" name="type" value={this.state.type} onChange={this.createInputChange} />
          </Form.Group>

          <Button variant="primary" size="lg" block="block" type="submit">
            Create Activity
          </Button>
        </Form>
      </div>
      );
  }
}
