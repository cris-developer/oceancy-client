import React, { Component } from 'react'

//import destinations from '../../destinations.json'

import { getAllDestinations } from '../../services/destinationService';
import { Link } from 'react-router-dom';
import DestinationCard from '../../components/destinationcard/DestinationCard'
import { Container,Row,Col } from 'reactstrap';


export default class Listdestinations extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        destinations: [],
        Search: ''
      };
    }
  
    componentDidMount() {
        getAllDestinations().then((res) =>{
        console.log("RESPUESTA DEL SERVICE", res)
        this.setState({
          destinations: res,
        })
    }
      );
    }
  
    handleChange = (e) => {
      this.setState({
        Search: e.target.value,
      });
      this.searchdestinations(this.state.Search)
    };
  
    searchDestinations = (params) => {
      this.searchDestinations(this.state.Search)
        .then (res => this.setState({destinations : res}))
    }
  
    render() {
         console.log(this.state.destinations);
        return (
            <div className="mt-3">
                {/* {this.state.destinations.map((el, idx) => 
                (
                <Container >
                  {(idx % 4 == 0) ? (<Row>
                  <Col xs="4"><DestinationCard 
                      key={idx} 
                      photoUrl={el.photoUrl}
                      name={el.name}
                      >
                      </DestinationCard></Col>
                  </Row>): 
                  (<Col xs="4"><DestinationCard 
                      key={idx} 
                      photoUrl={el.photoUrl}
                      name={el.name}
                      >
                      </DestinationCard>
                </Col>)}   
            </Container>
                ))} */}
              <div>
                
                  {this.state.destinations.map((el, idx) => (
                      
                      <div key={idx} >
                          
                              <img src={el.photoUrl} alt="Contact" className="img" style={{width: '30%'}} />
                          
                              <div className= 'contentText' >  {el.name}</div>
                      </div>
                    
                ))}
              </div>
                
          </div>
        );
      }
  }
