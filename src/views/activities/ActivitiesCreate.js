import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import { createActivity } from '../../services/activityService';

export default class ActivitiesCreate  extends Component {

  constructor(props) {
    super(props)

    // Setting up state
    this.state = {
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

    //this.handleInputChange = this.handleInputChange.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault()

    const ActivityObject = {
      name: this.state.name,
      description: this.state.description,
      address: this.state.address,
      startDate: this.state.startdDate,
      endDate: this.state.endDate,
      duration: this.state.duration,
      destination: this.state.destination,
      price: this.state.price,
      type: this.state.type
    };

    // axios.post('http://localhost:4000/Activitys/create-Activity', ActivityObject)
    //   .then(res => console.log(res.data));

    
  
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
  }

  componentDidMount() {
    createActivity()
    .then((res) =>{
       console.log("service answer", res)
        this.setState({
          destinations: res,
        })
    });
     }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={this.state.name} onChange={this.handleInputChange} />
          </Form.Group>

          <Form.Group controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="description" value={this.state.description} onChange={this.handleInputChange} />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" value={this.state.address} onChange={this.handleInputChange} />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="text" value={this.state.startDate} onChange={this.handleInputChange} />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="text" value={this.state.endDate} onChange={this.handleInputChange} />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Duration</Form.Label>
            <Form.Control type="text" value={this.state.duration} onChange={this.handleInputChange} />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Destination</Form.Label>
            <Form.Control type="text" value={this.state.destination} onChange={this.handleInputChange} />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" value={this.state.price} onChange={this.handleInputChange} />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Type</Form.Label>
            <Form.Control type="text" value={this.state.type} onChange={this.handleInputChange} />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Create Activity
          </Button>
        </Form>
      </div>
      );
  }
}
