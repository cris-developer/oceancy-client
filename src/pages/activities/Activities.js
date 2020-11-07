import React, { Component } from 'react'
import { getAllActivities} from '../../services/activityService';
import ActivityCard from '../../components/activitycard/ActivityCard'
import {  Link } from "react-router-dom";
import './Activities.css'


export default class Activities extends Component {
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
      <div className="mt-3">
         <Link to={"/activities/create/"} >
                       <div className="btn btn-primary">Create</div>  
          </Link>
          <div className="mt-3">
             <main className ='container' style= {{textAlign:'center'}}> 
              <div className ='rowActivities'>
   
                    <div className="activity-card-wrapper">
                    {this.state.activities.map((el, idx) => (
                      
                        <ActivityCard 
                            key={idx} 
                            photoUrl={el.photoUrl}
                            name={el.name}
                            destination={el.destination}
                            price={el.price}
                            duration={el.duration}
                            id={el._id}
                            >
                        </ActivityCard>
                
                  ))}
                    </div>
                </div>
           </main>
          </div>
       </div>

    );
  }
}


