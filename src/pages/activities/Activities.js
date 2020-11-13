import React, { Component } from 'react'
import { getAllActivities} from '../../services/activityService';
import ActivityCard from '../../components/activitycard/ActivityCard'
import {  Link } from "react-router-dom";
import './Activities.css'
import { Row,Col,Container } from 'react-bootstrap';
//import Footer from "../../components/footer/Footer";


export default class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //activities: [], //set now from App
      Search: ''
    };
  }

  componentDidMount() {
    getAllActivities()
    .then((res) => {
        console.log('i am this.props.appSetState on activities:',this.props.appSetState)
      this.props.appSetState({
        activities: res,
      });
    })
       
      
  }

  handleChange = (e) => {
    this.setState({
      Search: e.target.value,
    });
    this.searchActivity(this.state.Search)
  };


  render() {

    return (
      <div >
          <div className='banner'>
                 <h2 className='headerText'>Activities</h2> 
          </div>
          <Container>
            <Row>
              <Col xs={12}>
                  <div className="createButton">
                  <Link to={"/activities/create/"} >
                                <div className="btn btn-primary mt-3 " >Create</div>  
                    </Link>
                </div>
              </Col>
            </Row>
          </Container>
          
          <div className="mt-3">
             <main className ='container' style= {{textAlign:'center'}}> 
              <div className ='rowActivities'>
   
                    <div className="activity-card-wrapper">
                    {this.props.activities.map((el, idx) => (
                      
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
          {/* <Footer/> */}
       </div>

    );
  }
}


