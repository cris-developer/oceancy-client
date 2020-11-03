import React, { Component } from 'react'
import {Form, Button,Container,Row,Col} from 'react-bootstrap'
import { getAllActivities} from '../../services/activityService';
import ActivityCard from '../../components/activitycard/ActivityCard'
import {  Link } from "react-router-dom";
import './Activities.css'


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
         <Link to={"/activities/create/"} >
                       <div className="btn btn-primary">Create</div>  
          </Link>
          <div className="mt-3">
             <main className ='container' style= {{position:'relative', textAlign:'center',color :'white', display :'flex',flexDirection:'column'}}> 
              <div className ='rowActivities col-md-6 col-sm-12'>
             
                  {this.state.activities.map((el, idx) => (
                <Container >
                 <Row>
                   <Col xs ={{ span: 8}}>
                      <ActivityCard 
                          key={idx} 
                          photoUrl={el.photoUrl}
                          name={el.name}
                          destination={el.destination}
                          >
                      </ActivityCard>
                    </Col>
                   </Row>
                  <Link to={"/activities/details/" + el._id} >
                          <div className="btn btn-primary">details</div>  
                  </Link>
               </Container>
               
                ))}

         

                  {/* {this.state.activities.map((el, idx) => (
                    <div key={idx}>   
                        <img src={el.photoUrl} alt="ActivityList" className="img" style={{width:'60%',borderRadius:'10px'}}/>

                        <div className= 'destinationText' style = {{color:'white',position:'absolute',top:'10vh',left:'6vh'}}>  {el.destination}</div>
                        <div className= 'destinationName' style = {{color:'white',position:'absolute',top:'80%'}}>  {el.name}</div>
                  
                        <Link to={"/activities/details/" + el._id} >
                          <div className="btn btn-primary">details</div>  
                        </Link>
                                
                  </div>        
                    ))} */}
                </div>
           </main>
          </div>
       </div>

    );
  }
}


