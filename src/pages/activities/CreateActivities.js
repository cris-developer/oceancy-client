import React, { Component } from 'react'
import {Form, Button,Row,Col} from 'react-bootstrap'
import { createActivity,uploadImage } from '../../services/activityService';
import DatePicker from "react-datepicker";
//import Footer from "../../components/footer/Footer";

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
      photoUrl:'',
      isUploading: false,
      host: this.props.user._id
      }
     
  
    
  createInputChange =  (event) => {
    const { name, value } = event.target;
    // this.setState
    //this.props.appSetSt
    this.setState({
      [name]: value
    });
  }

  // console.log('i am this.props.appSetState on activities:',this.props.appSetState)
  // this.props.appSetState({

  // UPLOADING THE IMAGES

  createImageUpload = e => {  
    console.log("The file to be uploaded is: ", e.target.files[0]);
    this.setState ({isUploading:true});
    uploadImage(e.target.files[0])
    .then(response => {
      console.log(response);
      // this.setState({ photoUrl: response.path });
      this.setState({ photoUrl: response.path, isUploading:false} );
      
    })
    .catch(err => {console.log('Error while uploading the image:',err)})

    }
    

    // DATAPICKER

    setSelectedDate = (selectedDate, name) => {
      console.log(typeof selectedDate)
      let date = new Date(selectedDate);
      console.log({ [name]: date })
      //this.setState({ [name]: selectedDate });
      this.setState({ [name]: selectedDate });
    };

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
      host: this.state.host
    }
    
    createActivity(activity).then((response) => {
      console.log ('Response create activities:', response)
      this.props.appSetState({activities: this.props.activities.concat(response)})

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
      photoUrl:'',
      host:''
      });
    });
    this.props.history.push('/activities')
    //this.props.authenticate (user)
  };



  render() {
    //const {name,description,address,startDate,endDate,duration, destination,price,type,photoUrl,host}=this.state;
    const {name,description,address,startDate,endDate,duration, destination,price,type,photoUrl}=this.state;
    //let formatStartDate = new Date(startDate).toLocaleDateString()
    //let formatEndDate = new Date(endDate).toLocaleDateString()
    return (

      <>
       
          <div className='banner'>
                      <h2 className='headerText'>Create Activity</h2>
          </div>
            <div className='formContainer'>
              <Form onSubmit={this.addActivitySubmit}>             
                <Row>
                      <Col xs={6}>
                          <Form.Group controlId="Name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name"  value={name} onChange={this.createInputChange} />
                          </Form.Group>

                          <Form.Group controlId="Type">
                              <Form.Label>Type</Form.Label>
                              <Form.Control type="text" name="type" value={type} onChange={this.createInputChange} />
                            </Form.Group>

                          <Form.Group controlId="Destination">
                                <Form.Label>Destination</Form.Label>
                                <Form.Control type="text" name="destination" value={destination} onChange={this.createInputChange} />
                            </Form.Group>

                            <Form.Group controlId="Description">
                              <Form.Label>Description</Form.Label>
                              <Form.Control type="description"  name="description" value={description} onChange={this.createInputChange} />
                            </Form.Group>

                            <Form.Group controlId="Duration">
                                <Form.Label>Duration</Form.Label>
                                <Form.Control type="text" name="duration"value={duration} onChange={this.createInputChange} />
                            </Form.Group>
                      </Col>
                      <Col xs={6}>
                            <Form.Group controlId="Price">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" name="price" value={price} onChange={this.createInputChange} />
                              </Form.Group>
    {/* 
                            <Form.Group controlId="startDate">
                              <Form.Label>Start Date</Form.Label>
                              <Form.Control type="text" name="startDate" value={startDate} onChange={this.createInputChange} />
                            </Form.Group> */}

                            <Form.Group controlId="startDate">
                              <Form.Label>Start Date</Form.Label>
                              <DatePicker className="form-control" selected={startDate} name="startDate" onChange={(date) => this.setSelectedDate(date, "startDate")} minDate={new Date()} dateFormat="dd/MM/yyyy" isClearable />
                            </Form.Group>

                            <Form.Group controlId="endDate">  
                              <Form.Label>End Date</Form.Label>
                              <DatePicker className="form-control" selected={endDate} name="startDate" onChange={(date) => this.setSelectedDate(date, "endDate")} minDate={startDate} dateFormat="dd/MM/yyyy" isClearable />
                            </Form.Group>


                            {/* <Form.Group controlId="endDate">
                                <Form.Label>End Date</Form.Label>
                                <Form.Control type="text" name="endDate"value={endDate} onChange={this.createInputChange} />
                            </Form.Group> */}

                            <Form.Group controlId="Address">
                              <Form.Label>Address</Form.Label>
                              <Form.Control type="text" name="address" value={address} onChange={this.createInputChange} />
                            </Form.Group>

                            <Form.Group controlId="Image">
                              <Form.Label>Image Upload</Form.Label>
                              <Form.Control type="file" name="image" onChange={this.createImageUpload} />
                            </Form.Group>

                            <Button variant="primary" size="lg" block="block" type="submit" disabled={this.state.isUploading}>
                              Create Activity
                            </Button>
                      </Col>
                  </Row>       
                </Form>
          </div>
      {/* <Footer/> */}

      </>
      
      );
  }
}
