import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import { updateActivity,uploadImage,getActivityDetails } from '../../services/activityService';


export default class ActivitiesEdit  extends Component {
  
    constructor (props) {
    super(props)
        this.state = {
          activity: {}
          
          }
    }

    componentDidMount() {    
      const {params} =this.props.match;
      console.log ('params:',params.id)
      console.log ('GETTING ON CLIENT SIDE EDITING AN ACTIVITY')
    getActivityDetails(params.id)
        .then(editingActivity => {
            this.setState({ 
                activity: editingActivity
              });
          console.log(editingActivity);
        })
        .catch((err)=>{
            console.log(err)
        })
  }

   EditInputChange=  (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  //UPLOADING IMAGES
  createImageUpload = e => {  
    console.log("The file to be uploaded is: ", e.target.files[0]);
    uploadImage(e.target.files[0])
    .then(response => {
      console.log(response);
      this.setState({ photoUrl: response.path });
    })
    .catch(err => {console.log('Error while uploading the image:',err)})

    }

  updateActivitySubmit = (e) => {
    console.log ('I AM UPDATING')
    e.preventDefault();

    const activity = {
      name: this.state.activity.name,
      description: this.state.activity.description,
      address:this.state.activity.address,
      startDate:this.state.activity.startdDate,
      endDate:this.state.activity.endDate,
      duration:this.state.activity.duration,
      destination:this.state.activity.destination,
      price:this.state.activity.price,
      type:this.state.activity.type,
      photoUrl:this.state.activity.photoUrl
    }
    const {params}  = this.props.match

    console.log ('I AM RENDERING THE UPDATE ACTIVITY', activity)
   
    updateActivity(params.id,activity)
    .then((response) => {
      console.log (response)
    }).catch ((error=> {
      console.log(error)
    }))
    this.props.history.push('/activities')
  };

  render() {
     // console.log ('I AM RENDERING THE UPDATE ACTIVITY', this.state)
      const {name,description,address,startDate,endDate,duration,destination,type,price,photoUrl}=this.state.activity;
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.updateActivitySubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name"  value={name} placeholder={name} onChange ={this.EditInputChange} />
          </Form.Group>

          <Form.Group controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="description"  name="description" value={description} placeholder={description} onChange={this.EditInputChange} />
          </Form.Group>

          <Form.Group controlId="Address">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name="address" value={address} placeholder={address} onChange={this.EditInputChange} />
          </Form.Group>

          <Form.Group controlId="startDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="text" name="startDate" value={startDate} placeholder={startDate}  onChange={this.EditInputChange} />
          </Form.Group>

          <Form.Group controlId="endDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="text" name="endDate"value={endDate} placeholder={endDate}  onChange={this.EditInputChange} />
          </Form.Group>

          <Form.Group controlId="Duration">
            <Form.Label>Duration</Form.Label>
            <Form.Control type="text" name="duration"value={duration} placeholder={duration}  onChange={this.EditInputChange} />
          </Form.Group>

          <Form.Group controlId="Destination">
            <Form.Label>Destination</Form.Label>
            <Form.Control type="text" name="destination" value={destination} placeholder={destination} onChange={this.EditInputChange} />
          </Form.Group>

          <Form.Group controlId="Price">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" name="price" value={price} placeholder={price} onChange={this.EditInputChange} />
          </Form.Group>

          <Form.Group controlId="">
            <Form.Label>Type</Form.Label>
            <Form.Control type="text" name="type" value={type} placeholder={type} onChange={this.EditInputChange} />
          </Form.Group>

          <Form.Group controlId="Image">
            <Form.Label>Image Upload</Form.Label>
            <Form.Control type="file" name="image" onChange={this.editImageUpload} />
          </Form.Group>

          <Button variant="primary" size="lg" block="block" type="submit">
            Edit Activity
          </Button>
        </Form>
      </div>
      );
  }
}
