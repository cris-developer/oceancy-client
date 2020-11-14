//import { parseWithOptions } from 'date-fns/fp';
import React, { Component } from 'react'
import {Form, Button,Row,Col} from 'react-bootstrap'
import { updateActivity,uploadImage,getActivityDetails } from '../../services/activityService';
import DatePicker from "react-datepicker";
//import Footer from "../../components/footer/Footer";


export default class ActivitiesEdit  extends Component {
  
        state = {
          name: '',
          description:'' ,
          address:'',
          startDate:'',
          endDate:'',
          duration:'',
          destination:'',
          price:'',
          type:'',
          photoUrl:''
          
          }
        
    componentDidMount() {    
      const {params} =this.props.match;
      console.log ('params:',params.id)
      console.log ('GETTING ON CLIENT SIDE EDITING AN ACTIVITY')
    getActivityDetails(params.id)
        .then(editingActivity => {
            this.setState({ 
                activity: editingActivity.activity,
                name: editingActivity.name,
                description: editingActivity.description,
                address: editingActivity.address,
                startDate: editingActivity.startDate,
                endDate: editingActivity.endDate,
                duration: editingActivity.duration,
                destination: editingActivity.destination,
                price: editingActivity.price,
                type: editingActivity.type,
                photoUrl:editingActivity.photoUrl

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

    // DATAPICKER

    setSelectedDate = (selectedDate, name) => {
      console.log(typeof selectedDate)
      let date = new Date(selectedDate);
      console.log({ [name]: date })
      this.setState({ [name]: selectedDate });
    };

  
  updateActivitySubmit = (e) => {
    console.log ('I AM UPDATING')
    e.preventDefault();

    const activity = {
      name: this.state.name,
      description: this.state.description,
      address:this.state.address,
      startDate:this.state.startDate,
      endDate:this.state.endDate,
      duration:this.state.duration,
      destination:this.state.destination,
      price:this.state.price,
      type:this.state.type,
      photoUrl:this.state.photoUrl
    }
    const {params}  = this.props.match

    console.log ('I AM RENDERING THE UPDATE ACTIVITY', activity)
   
    updateActivity(params.id,activity)
    .then((response) => {
      console.log (response)
     
      // const activityIndex= this.props.activities.findIndex ((activity)=>{
      //   return activity.id===response.id
      // })
      // const activitiesClone =[...this.props.activities]

      // activitiesClone[activityIndex]= response

      // this.props.appSetState({activities: activitiesClone }) //new added

    }).catch ((error=> {
      console.log(error)
    }))
    this.props.history.push('/activities')
  };

  render() {
     // console.log ('I AM RENDERING THE UPDATE ACTIVITY', this.state)
      const {name,description,address,startDate,endDate,duration,destination,type,price,photoUrl}=this.state;
      //let formatStartDate = new Date(startDate).toLocaleDateString()
      //let formatEndDate = new Date(endDate).toLocaleDateString()
    return (
      <div>

          <div className='banner'>
                  <h2 className='headerText'>Edit Activity</h2>
           </div>
            
          <div className='formContainer'>
                  <Form onSubmit={this.updateActivitySubmit}>
                    <Row>
                      <Col xs={6}>
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

                            {/* <Form.Group controlId="startDate">
                              <Form.Label>Start Date</Form.Label>
                              <Form.Control type="text" name="startDate" value={formatStartDate} placeholder={startDate}  onChange={this.EditInputChange} />
                            </Form.Group>
s
                            <Form.Group controlId="endDate">
                              <Form.Label>End Date</Form.Label>
                              <Form.Control type="text" name="endDate"value={formatEndDate} placeholder={endDate}  onChange={this.EditInputChange} />
                            </Form.Group> */}


                            <Form.Group controlId="startDate">
                              <Form.Label>Start Date</Form.Label>
                              <DatePicker className="form-control" selected={startDate ? new Date(startDate) : '' } name="startDate" onChange={(date) => this.setSelectedDate(date, "startDate")} dateFormat="dd/MM/yyyy" isClearable />
                            </Form.Group>

                            <Form.Group controlId="endDate">  
                              <Form.Label>End Date</Form.Label>
                              <DatePicker className="form-control" selected={endDate ? new Date(endDate) : '' } name="startDate" onChange={(date) => this.setSelectedDate(date, "endDate")} minDate={startDate}  dateFormat="dd/MM/yyyy" isClearable />
                            </Form.Group>


                      </Col>
                  
                      <Col xs={6}>
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

                          <Form.Group controlId="Type">
                            <Form.Label>Type</Form.Label>
                            <Form.Control type="text" name="type" value={type} placeholder={type} onChange={this.EditInputChange} />
                          </Form.Group>

                          <Form.Group controlId="Image">
                            <Form.Label>Image Upload</Form.Label>
                            <Form.Control type="file" name="image" onChange={this.createImageUpload} />
                          </Form.Group>

                          <Button variant="primary" size="lg" block="block" type="submit">
                            Edit Activity
                          </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
            {/* <Footer/> */}
      </div>
      
      );
  }
}
