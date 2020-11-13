import React, { Component } from 'react'
import { Button,Modal} from 'react-bootstrap'
//import {ToggleButton} from 'react-bootstrap';
import { getActivityDetails,deleteActivity } from '../../services/activityService';
import {  bookingActivity } from '../../services/activityService';
//import {  Link } from "react-router-dom";
import './ActivityDetails.css'
//import Footer from "../../components/footer/Footer";

class ActivityDetails extends Component {

        state = {
            activity: {},
            show:false,

        };
        
        componentDidMount() {
            const {params} =this.props.match;
            console.log ('params:',params.id)
            console.log ('GETTING ON CLIENT SIDE ACTIVITY DETAILS')
          getActivityDetails(params.id)
              .then(activityDetails => {
                  this.setState({ 
                      activity: activityDetails,
                    });
                console.log(activityDetails);
              })
              .catch((err)=>{
                  console.log(err)
              })
        }
        editActivity = () =>{
            this.props.history.push("/activities/edit/" + this.props.match.params.id)
        }
        bookingActivity =()=>{
            const {params}= this.props.match;
            // const userId = localStorage.getItem('accessToken');
            const userId =this.props.user;
            bookingActivity(params.id,userId)
            .then((bookingActivity)=>{
                console.log ('I AM BOOKING FROM CLIENT SIDE COMPONENT')
                console.log ('Booking Activity :',bookingActivity)
                this.setState({
                    activity: bookingActivity,
                    show:true})
            }).catch((error) => {
                console.log(error)
            });
        }

        deleteActivity =()=>{
            const {params}= this.props.match;
            deleteActivity(params.id)
            .then((response)=>{
                console.log ('I AM DELETING FROM CLIENT SIDE COMPONENT')
            }).catch((error) => {
                console.log(error)
            })
            this.props.history.push('/activities')
        }


         handleClose = () => {
             this.setState({show:false})}

         handleShow = () => {
             this.setState({show:true})}

        


    render() {

        const activity = this.state.activity;
        console.log ('ACTIVITY DEL RENDER')
        let imageUrl = '/images'
        let formatStartDate = new Date(activity.startDate).toLocaleDateString()
        let formatEndDate = new Date(activity.endDate).toLocaleDateString()

        return (
            <>
                       <div>
                            <img src={activity.photoUrl} alt="ActivityList" className="imgActivityDetails"  style={{backgroundImage :`url(${imageUrl})` }}/>           
                            <div className= 'headerText'>  {activity.name}</div>       
                       </div>
                        
                         <section>
                            <div className="section-column">
                                <div className='tableContainer' >
                                            
                                    <div className="table-row-wrapper table-row-wrapper-description">
                                        <div className="heading-wrapper">Description</div>
                                        <div className="content-wrapper">
                                        <div>
                                        {activity.description}
                                        </div>
                                        </div>
                                    </div>
                                    <div className="table-row-wrapper">
                                        <div className="heading-wrapper">Start Date</div> 
                                        <div className="content-wrapper">{formatStartDate}</div> 
                                    </div>
                                    <div className="table-row-wrapper">
                                        <div className="heading-wrapper">End Date</div> 
                                        <div className="content-wrapper">{formatEndDate}</div>  
                                    </div>
                                    <div className="table-row-wrapper">
                                        <div className="heading-wrapper">Duration</div>  
                                        <div className="content-wrapper">{activity.duration}</div>  
                                    </div>
                                    <div className="table-row-wrapper">
                                        <div className="heading-wrapper">Price</div>  
                                        <div className="content-wrapper">{activity.price}</div>  
                                    </div>
                                    <div className="table-row-wrapper">    
                                        <div className="heading-wrapper">Type</div>  
                                        <div className="content-wrapper">{activity.type}</div>  
                                    </div>
                                    <div className="table-row-wrapper">    
                                        <div className="heading-wrapper">Address</div> 
                                        <div className="content-wrapper">{activity.address}</div>  
                                    </div>
                                    
                                    

                                    <div className="table-row-wrapper">  
                                        <div className="heading-wrapper">Price Includes</div>
                                        <div className="content-wrapper">
                                            <ul>
                                                <li>All equipment needed</li>
                                                <li>Insurance</li>
                                                <li>Experienced instructor,where needed</li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div className="table-row-wrapper">    
                                        <div className="heading-wrapper">Price Not Includes</div>
                                        <div className="content-wrapper">
                                        <ul>
                                                <li>Transport</li>
                                                <li>Flights</li>
                                                <li>Accomodation</li>
                                            </ul>
                                            </div> 
                                    </div>
                                    <div className="table-row-wrapper">  
                                        <div className="heading-wrapper">What to bring</div>
                                        <div className="content-wrapper">
                                        <ul>
                                                <li>Sun glasses</li>
                                                <li>Sun hat</li>
                                                <li>Sun screen</li>
                                            </ul>
                                            </div>
                                    </div>

                                    <div className="table-row-wrapper">   
                                        <div className="heading-wrapper">Host</div>  
                                        {/* <div className="content-wrapper">{activity.host.fullName}</div>   */}
                                        <div className="content-wrapper">{activity.host && activity.host.fullName}</div>  
                                    </div>

                                    <div className="table-row-wrapper">  
                                        <div className="heading-wrapper">Attendees</div>
                                        <div className="content-wrapper">
                                        {activity.attendees && activity.attendees.map((el,idx) => {
                                    return (
                                        <ul>
                                            <li>{el.fullName}</li>
                                            {/* <img
                                                src={el.photoUrl}
                                                alt =""
                                                /> */}
                                        </ul>
                                    );
                                })}
                                            </div>
                                    </div>      
                                </div>

                                <div className="button-wrapper">
                                        {/* {console.log (activity.host)}

                                         {this.props.user === activity.host && (

                                                
                                            
                                            <>

                                              

                                                <Link to={"/activities/edit/" + this.props.match.params.id}>
                                                    <div className="btn btn-warning">Edit</div> 
                                                </Link>

                                                <Button onClick={this.bookingActivity} size="md" variant="primary">Booking</Button>
                                                <Button onClick={this.deleteActivity} size="md" variant="danger">Delete</Button>
                                            </>

                                        )} 
                                     */}
                                        {/* <Link to={"/activities/edit/" + this.props.match.params.id}>
                                                    <div className="btn btn-warning">Edit</div> 
                                        </Link> */}


                                        <Button onClick={this.editActivity} size="md" variant="warning">Edit</Button>
                                        {/* {activity.attendees && activity.attendees.includes(this.props.user) && (<Button onClick={this.bookingActivity} size="md" variant="primary">Cancel</Button>)} */}
                                        <Button onClick={this.bookingActivity} size="md" variant="primary">Booking</Button>
                                        <Button onClick={this.deleteActivity} size="md" variant="danger">Delete</Button>

                                    
                                </div>
                            </div>
                        </section>
                    
                                <Modal show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>You have booked the {activity.name}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>It will start on {formatStartDate}</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={this.handleClose}>
                                        Close
                                        </Button>
                                        
                                    </Modal.Footer>
                            </Modal>
                 {/* <Footer/>                */}
            </>
        )
    }
}

export default ActivityDetails



