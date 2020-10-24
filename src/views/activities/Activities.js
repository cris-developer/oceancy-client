import React, { Component } from 'react'
import {Form, Button,Container,Row,Col} from 'react-bootstrap'
import { getAllActivities} from '../../services/activityService';
//import './Activities.css'


export default class Activities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      Search: ''
    };
  }

  componentDidMount() {
      
    getAllActivities()
    .then((res) =>
      this.setState({
        activities: res,
      }));
  }

  handleChange = (e) => {
    this.setState({
      Search: e.target.value,
    });
    this.searchActivity(this.state.Search)
  };

//   searchActivity = (params) => {
//     searchActivity(this.state.Search)
//       .then (res => this.setState({activities : res}))
//   }

  render() {

    return (
      <div>
       <div className="container">
         
          <input
            className="searchBar"
            placeholder="Search Activities"
            type= "text"
            name="Search"
            value={this.state.search}
            onChange={this.handleChange}
          />
           <div>

            {this.state.activities.map((el, idx) => (

                <div key={idx}>          
                    <img src={el.photoUrl} alt="Contact" className="img" />           
                    <div className= 'contentText'>  {el.name}</div>
                    <div>{el.description}</div>  
                    <div>{el.startDate}</div>  
                    <div>{el.endDate}</div>  
                    <div>{el.duration}</div>  
                    <div>{el.price}</div> 
                    <div>{el.type}</div>  
                    <div>{el.address}</div>  
                    <div>{el.host}</div>         
                            
               </div>        
                ))}
            </div>
       </div>
    </div>
    );
  }
}


