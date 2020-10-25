import React from "react";
//import SearchBar from '../../components/searchbar/SearchBar.js';


const Home = (props) => {
  const { username } = props.user;
  const {}
  return (
    <div>
      <h1>welcome {username && props.user.username}</h1>
    </div>
  );
};

export default Home;
