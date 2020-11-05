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

function CarouselComponent() {
  return (
    <div className="carouselWrapper">
      <Carousel items={items} >
        <Carousel.Item interval={4000}>
          <img
          className="d-block w-100"
          src="images/header1.jpeg"
          alt="First slide"
          />
          <Carousel.Caption>
          <h3>Enjoy Surfing and Sailing</h3>
          </Carousel.Caption>
        </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
        className="d-block w-100"
        src="images/header2.jpeg"
        alt="Third slide"
        />
        <Carousel.Caption>
        <h3>Enjoy Surfing and Sailing</h3>
        </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
          className="d-block w-100"
          src="images/header3.png"
          alt="Third slide"
          />
          <Carousel.Caption>
        <h3>Enjoy Surfing and Sailing</h3>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <SearchBar />
    </div>
  );
}
 
export default CarouselComponent;



