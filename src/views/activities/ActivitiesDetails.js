import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import { getActivityDetails, bookingActivity,deleteActivity } from '../../services/activityService';

import {  Link } from "react-router-dom";

class ActivitiesDetails extends Component {

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
  
        };
        
        // super(props);
        // console.log(this.props.match.params.id);
    
        //     props = props;
        
        // renderEditForm = () => {
        //     if(!this.state.title){
        //       this.getActivityDetails();
        //     } else {
        //     //                                                    {...props} => so we can have 'this.props.history' in Edit.js
        //     //                                                                                          ^
        //     //                                                                                          |
        //       return <EditActivities theActivity={this.state} getTheActivity={this.getActivityDetails} {...this.props} />
        //     }
        //   }
        
        // // DELETE PROJECT:
        //   deleteProject = () => {
        //     const { params } = this.props.match;
        //     axios.delete(`http://localhost:5000/api/projects/${params.id}`)
        //     .then( () =>{
        //         this.props.history.push('/projects'); // !!!         
        //     })
        //     .catch((err)=>{
        //         console.log(err)
        //     })
        //   }

        bookingActivity =(id)=>{
            console.log (id);
            bookingActivity(id,localStorage.getItem('accessToken')).then((response)=>{

            });
        }

        deleteActivity =(id)=>{
            console.log (id);
            deleteActivity(id).then((response)=>{
                        
            });
        }


    render() {

        const activity = this.state.activity;
        console.log ('ACTIVITY DEL RENDER')
        return (
            <div className ="mt-3 text-center"> 
                        <div>          
                            <img src={activity.photoUrl} alt="ActivityList" className="img"  style={{width: '50%'}}/>           
                            <div className= 'contentText'>  {activity.name}</div>
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
                        <button className="btn btn-primary" onClick={this.bookingActivity(this.props.match.params.id)}>Book</button>  
                    {/* </Link> */}
                    <Link to={"/activities/edit/" + this.props.match.params.id}>
                        <div className="btn btn-warning">Edit</div> 
                    </Link>
                    {/* <Link to={"/activities/delete/" + this.props.match.params.id}> */}
                        {/* <div className="btn btn-danger">Delete</div> */}
                        <button className="btn btn-danger" onClick={this.deleteActivity(this.props.match.params.id)}>Delete</button>  
                    {/* </Link> */}
            </div>
        )
    }
}

export default ActivitiesDetails



