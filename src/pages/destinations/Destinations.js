import React, { Component } from 'react'
import './Destinations.css'
//import destinations from '../../destinations.json'
import { getAllDestinations } from '../../services/destinationService';
import DestinationCard from '../../components/destinationcard/DestinationCard'
//import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";

export default class Destinations extends Component {
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
            <div >
             <NavBar/>
              <div className='banner'>
              
                  <h2 className='headerText'>Destinations</h2>
              </div>
               <div className="destinationCardWrapper">
                    {/* const style= {position:'relative', textAlign:'center',color :'white', display :'flex',flexDirection:'column'} */}
             
                   {/* <div className ='rowDestinations col-md-6 col-sm-12'> */}
               
                  {this.state.destinations.map((el, idx) => (

                    <DestinationCard 
                          key={idx} 
                          photoUrl={el.photoUrl}
                          name={el.name}
                          >
                          </DestinationCard>
                  
                    ))}
                 </div>
                    {/* {<div className={(idx == 0 || idx % 4 == 0) ?  'row': ''}>
                      <DestinationCard 
                          key={idx} 
                          photoUrl={el.photoUrl}
                          name={el.name}
                          >
                          </DestinationCard>
                    </div>

                  ))} */}


                  {/* <Container >
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
                  </Container> */}
                {/* </div> */}
               
              {/* <div>
                  {this.state.destinations.map((el, idx) => (
                      <div key={idx} >
                              <img src={el.photoUrl} alt="Contact" className="img" style={{width: '30%'}} />
                              <div className= 'contentText' >  {el.name}</div>
                      </div>
                ))}
              </div> */}
            {/* <Footer/> */}
          </div>
        );
      }
  }
