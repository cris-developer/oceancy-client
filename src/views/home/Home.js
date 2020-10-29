import React from "react";
import SearchBar from '../../components/searchbar/SearchBar.js';
import Carousel from '../../components/carousel/Carousel.js';
//import {Carousel} from 'react-bootstrap'

const Home = (props) => {
  const { username } = props.user;
  
  return (
    <div>
     
      {/* <Carousel/> */}
      <SearchBar/>
      {/* <h1>welcome {username && props.user.username}</h1> */}
    </div>
  );
};

export default Home;
