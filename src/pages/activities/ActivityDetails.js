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
        return (
            <div>
            {/* <div className ="mt-3 text-center">  */}
                       <div className='header'>
                                <div className='headerBanner'>  
                                </div>
                       </div>
                        <div>
                        {/* style={{backgroundImage :`url(${imageUrl})`  */}
                            <img src={activity.photoUrl} alt="ActivityList" className="imgActivityDetails"  style={{backgroundImage :`url(${imageUrl})` }}/>           
                            <div className= 'headerText'>  {activity.name}</div>
                            <div>{activity.description}</div>  
                            <div>{activity.startDate}</div>  
                            <div>{activity.endDate}</div>  
                            <div>{activity.duration}</div>  
                            <div>{activity.price}</div> 
                            <div>{activity.type}</div>  
                            <div>{activity.address}</div>
                            <div>{activity.host}</div>                              
                        </div>  
                          
                    
                    {/* <Link to={"/activities/book/" + this.props.match.params.id}> */}
                        {/* <button className="btn btn-primary" onClick={this.bookingActivity(this.props.match.params.id)}>Book</button>   */}
                    {/* </Link> */}
                    <Link to={"/activities/edit/" + this.props.match.params.id}>
                        <div className="btn btn-warning">Edit</div> 
                    </Link>
                    {/* <Link to={"/activities/delete/" + this.props.match.params.id}> */}
                        {/* <div className="btn btn-danger">Delete</div> */}
                        {/* <button className="btn btn-danger" onClick={this.deleteActivity(this.props.match.params.id)}>Delete</button>   */}
                    {/* </Link> */}

                    <Button onClick={this.bookingActivity} size="md" variant="primary">Booking</Button>
                    <Button onClick={this.deleteActivity} size="md" variant="danger">Delete</Button>
            </div>
        )
    }
}

export default ActivityDetails



