import React, { Component } from 'react'
import { Button} from 'react-bootstrap'
import { getActivityDetails,deleteActivity } from '../../services/activityService';
import {  bookingActivity } from '../../services/activityService';
import {  Link } from "react-router-dom";
import './ActivityDetails.css'

class ActivityDetails extends Component {

        state = {
            activity: {}
        };
        
        componentDidMount() {
            const {params} =this.props.match;
            console.log ('params:',params.id)
            console.log ('GETTING ON CLIENT SIDE ACTIVITY DETAILS')
          getActivityDetails(params.id)
              .then(activityDetails => {
                  this.setState({ 
                      activity: activityDetails
                    });
                console.log(activityDetails);
              })
              .catch((err)=>{
                  console.log(err)
              })
        }
        
        bookingActivity =()=>{
            const {params}= this.props.match;
            const userId = localStorage.getItem('accessToken');
            bookingActivity(params.id,userId)
            .then((response)=>{
                console.log ('I AM BOOKING FROM CLIENT SIDE COMPONENT')
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
                                        <div className="heading-wrapper">Host</div>  
                                        <div className="content-wrapper">{activity.host}</div>  
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

                                        
                                        
                                        
                                </div>

                                <div className="button-wrapper">
                                    <Link to={"/activities/edit/" + this.props.match.params.id}>
                                        <div className="btn btn-warning">Edit</div> 
                                    </Link>
                                

                                    <Button onClick={this.bookingActivity} size="md" variant="primary">Booking</Button>
                                    <Button onClick={this.deleteActivity} size="md" variant="danger">Delete</Button>
                                </div>
                            </div>
                        </section>
                    {/* <Link to={"/activities/book/" + this.props.match.params.id}> */}
                        {/* <button className="btn btn-primary" onClick={this.bookingActivity(this.props.match.params.id)}>Book</button>   */}
                    {/* </Link> */}
                    
            </>
        )
    }
}

export default ActivityDetails



