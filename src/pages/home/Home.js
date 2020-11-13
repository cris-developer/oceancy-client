import React, { Component } from "react";
//import SearchBar from '../../components/searchbar/SearchBar.js';
import Carousel from '../../components/carousel/Carousel.js';
//import {Carousel} from 'react-bootstrap'
import TopDestinations from '../../components/topDestinations/topDestinations.js'
//mport Footer from "../../components/footer/Footer";
import './Home.css'

export default class Home extends Component {

  state = {
    searchActivities: []
  }

  //const { username } = props.user;
  renderResults = (results) => {

    this.setState({ searchActivities: results })

  }

  showPlaceholderContent = () => {

    return (
      <div className="top-tours-destinations-wrapper">
        <TopDestinations />
    </div>
    )
  }

  render() {
    return (
      <>
        <div className="home-wrapper">
          
          <div className="carousel-wrapper">
            
            <Carousel renderResults={this.renderResults} />

          </div>
          <div className ='search-results-container'>
            {

            }
              {this.state.searchActivities.length > 0  ? this.state.searchActivities.map((el, idx) => (
                <div key={idx}> 
                <div className='HomeCardContainer'>
                    <div className="HomeCardImage"> 
                      <img src={el.photoUrl} alt="ActivityList" className="img"/>
                    </div>
                  
                  <div className="cardInfo" >
                      <div className= 'contentText'>  {el.name}</div>
                      
                  </div>
              </div>
                </div>        
            )): this.showPlaceholderContent() }
            {/* {this.state.searchActivities  ? this.state.searchActivities.map((el, idx) => (
              <div key={idx}> 
               <div className='HomeCardContainer'>
                  <div className="HomeCardImage"> 
                    <img src={el.photoUrl} alt="ActivityList" className="img"/>
                  </div>
                 
                <div className="cardInfo" >
                    <div className= 'contentText'>  {el.name}</div>
                </div>
            </div>
              </div>        
          )): ''} */}

          </div>
        </div>
         {/* <Footer/> */}
      </>
    );
  }
  
};