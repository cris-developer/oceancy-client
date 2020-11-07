import React, { Component } from "react";
//import SearchBar from '../../components/searchbar/SearchBar.js';
import Carousel from '../../components/carousel/Carousel.js';
//import {Carousel} from 'react-bootstrap'


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
               <div className='HomeCardContainer'>
                  <div className="HomeCardImage"> 
                    <img src={el.photoUrl} alt="ActivityList" className="img"/>
                  </div>
                 
                <div className="cardInfo" >
                    <div className= 'contentText'>  {el.name}</div>
                    <div>{el.description}</div> 
                </div>
            </div>
              </div>        
          )): ''}
        </div>
      
      </div>
    );
  }
  
};