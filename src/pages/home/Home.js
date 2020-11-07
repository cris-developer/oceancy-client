import React, { Component } from "react";
//import SearchBar from '../../components/searchbar/SearchBar.js';
import Carousel from '../../components/carousel/Carousel.js';
//import {Carousel} from 'react-bootstrap'
//import { AnimateOnChange } from 'react-animation'

import './Home.css'

export default class Home extends Component {

  state = {
    searchActivities: []
  }

  //const { username } = props.user;
  renderResults = (results) => {

    this.setState({ searchActivities: results })

  }

  render() {
    return (
      <div className="home-wrapper">
        
        <div className="carousel-wrapper">
          
          <Carousel renderResults={this.renderResults} />

        </div>
        <div className ='search-results-container'>

            {this.state.searchActivities  ? this.state.searchActivities.map((el, idx) => (
              <div key={idx}>   
                  <img src={el.photoUrl} alt="ActivityList" className="img"  style={{width:'10%' ,display:'flex',flexDirection:'row' }}/>
                  <div className= 'contentText'>  {el.name}</div>
                  <div>{el.description}</div> 
    
              </div>        
          )): ''}
        </div>
        {/* <SearchBar/> */}
        {/* <h1>welcome {username && props.user.username}</h1> */}
        {/* <AnimateOnChange>
          <h1 className= 'titleHeader' style ={{marginTop : '400px'}}>Enjoy your holidays</h1>
        </AnimateOnChange> */}
      </div>
    );
  }
  
};