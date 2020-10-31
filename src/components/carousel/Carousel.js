
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header1 from '../../images/header1.png'
import Header2 from '../../images/header2.jpeg'
import Header3 from '../../images/header3.jpeg'
function CarouselComponent() {
  return (
    <div className="carouselWrapper">
      <Carousel>
        <div>
          <img src={Header1} />
        </div>
        <div>
           <img src={Header2} />
        </div>
        <div>
           <img src={Header3} />
        </div>
      </Carousel>
    </div>
  );
}
 
export default CarouselComponent;


