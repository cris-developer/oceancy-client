
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
 
function CarouselComponent() {
  return (
    <div className="carouselWrapper">
      <Carousel>
        <div>
          <img src="../images/header1.png" />
        </div>
        <div>
          <img src="../images/header1.jpeg" />
        </div>
        <div>
          <img src="../images/header1.jpeg" />
        </div>
      </Carousel>
    </div>
  );
}
 
export default CarouselComponent;


