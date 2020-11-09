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
                       <div>
                            {/* style={{backgroundImage :`url(${imageUrl})`  */}
                            <img src={activity.photoUrl} alt="ActivityList" className="imgActivityDetails"  style={{backgroundImage :`url(${imageUrl})` }}/>           
                            <div className= 'headerText'>  {activity.name}</div>       
                       </div>
                        
                         <section  >
                                <table className='tableContainer' >
                                            <thead>
                                                    <tr>
                                                        <th id="heading">Description</th>
                                                        <td id="content">{activity.description}</td>
                                                    </tr>
                                                    <tr>
                                                        <th d="heading">Start Date</th> 
                                                        <td d="row">{activity.startDate}</td> 
                                                    </tr>
                                                    <tr>
                                                        <th d="heading">End Date</th> 
                                                        <td d="row">{activity.endDate}</td>  
                                                    </tr>
                                                    <tr>
                                                        <th d="heading">Duration</th>  
                                                        <td d="heading">{activity.duration}</td>  
                                                    </tr>
                                                    <tr>
                                                        <th d="heading">Price</th>  
                                                        <td d="heading">{activity.price}</td>  
                                                    </tr>
                                                    <tr>    
                                                        <th d="heading">Type</th>  
                                                        <td d="heading">{activity.type}</td>  
                                                     </tr>
                                                    <tr>    
                                                        <th d="heading">Address</th> 
                                                        <td d="heading">{activity.address}</td>  
                                                    </tr>
                                                    <tr>   
                                                        <th d="heading">Host</th>  
                                                        <td d="heading">{activity.host}</td>  
                                                    </tr>
                                                    <tr>  
                                                        <th d="heading">Price Includes</th>
                                                        <td d="heading">All equipment needed. Insurance.Experienced instructor,where needed</td> 
                                                    </tr>
                                                    <tr>    
                                                        <th d="heading">Price Not Includes</th>
                                                        <td d="heading">Transport.Flighs.Acommodation</td> 
                                                    </tr>
                                                    <tr>  
                                                        <th d="heading">What to bring</th>
                                                        <td d="heading">Sun glasses.Sun hat.Sun screen</td> 
                                                    </tr>

                                            </thead>
                                        
                                            <tbody>
                                                
                                            </tbody>
                                </table>
                        </section>
                    {/* <Link to={"/activities/book/" + this.props.match.params.id}> */}
                        {/* <button className="btn btn-primary" onClick={this.bookingActivity(this.props.match.params.id)}>Book</button>   */}
                    {/* </Link> */}
                    <Link to={"/activities/edit/" + this.props.match.params.id}>
                        <div className="btn btn-warning">Edit</div> 
                    </Link>
                   

                    <Button onClick={this.bookingActivity} size="md" variant="primary">Booking</Button>
                    <Button onClick={this.deleteActivity} size="md" variant="danger">Delete</Button>
            </div>
        )
    }
}

export default ActivityDetails



