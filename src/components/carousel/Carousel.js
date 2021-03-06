import React from "react";

import Carousel from 'react-bootstrap/Carousel'

import SearchBar from '../../components/searchbar/SearchBar.js';

import "react-responsive-carousel/lib/styles/carousel.min.css";
//import Header1 from '../../images/header1.jpeg'
//import Header2 from '../../images/header2.jpeg'
//import Header3 from '../../images/header3.png'
import './Carousel.css'


const items = [
  {
    src: 'images/header1.jpeg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: 'images/header2.jpeg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: 'images/header3.png',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

function CarouselComponent(props) {

  let renderSearchResults = (results) => {
    props.renderResults(results)
  }
  return (
    <div className="carouselWrapper">
      <Carousel items={items} >
        <Carousel.Item interval={4000}>
          <img
          className="d-block w-100"
          // src="images/Header1_Cropped_2121 width_Maldives_photo.jpg"
          src='images/Maldives_tropical_water_2121*1410.jpg'
          alt="First slide"
          />
          <Carousel.Caption>
          <h3>Enjoy your favorite water sports worldwide</h3>
          </Carousel.Caption>
        </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
        className="d-block w-100"
        src="images/maldives medim 2121*1414.jpg"
        alt="Third slide"
        />
        <Carousel.Caption>
        <h3>Find the best water sports destinations ever</h3>
        </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
          className="d-block w-100"
          src="images/Underwater_medium 2121 *1414.jpg"
          alt="Third slide"
          />
          <Carousel.Caption>
        <h3>Make the most out of your experience</h3>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <SearchBar renderSearchResults={renderSearchResults}/>
    </div>
  );
}
 
export default CarouselComponent;
