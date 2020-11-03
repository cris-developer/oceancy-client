import React from "react";
import SearchBar from '../../components/searchbar/SearchBar.js';
import Carousel from '../../components/carousel/Carousel.js';
//import {Carousel} from 'react-bootstrap'
import { AnimateOnChange } from 'react-animation'

const Home = (props) => {
  const { username } = props.user;
  
  return (
    <div>
      <Carousel/>
      
      <SearchBar/>
      {/* <h1>welcome {username && props.user.username}</h1> */}
      <AnimateOnChange>
        <h1 className= 'titleHeader' style ={{marginTop : '400px'}}>Enjoy your holidays</h1>
      </AnimateOnChange>
    </div>
  );
};

export default Home;
