import React from "react";
//import SearchBar from '../../components/searchbar';


const Home = (props) => {
  const { username } = props.user;
  return (
    <div>
      <h1>welcome {username && props.user.username}</h1>
    </div>
  );
};

export default Home;
