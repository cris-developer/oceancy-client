import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import AnonRoute from "./components/auth/AnonRoute";
import PrivateRoute from "./components/auth/PrivateRoute";
import { validateSession } from "./services/userService";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Signup from "./views/signup/Signup";
import Destinations from './views/destinations/Destinations.js';
import destinations from './destinations.json';
import Activities from './views/activities/Activities';
import ActivitiesDetails from './views/activities/ActivitiesDetails';
import CreateActivities from './views/activities/CreateActivities';
import EditActivities from './views/activities/EditActivities';
import Profile from './views/profile/Profile';
import EditProfile from './views/profile/EditProfile';
import NavBar from "./components/navbar/NavBar";



class App extends React.Component {
  state = {
    authenticated: false,
    user: {},
  };
  componentDidMount = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      validateSession(accessToken)
        .then((response) => {
          console.log(response, "RESPONSE");
          this.authenticate(response.session.userId);
        })
        .catch((err) => console.log(err));
    }
  };

  authenticate = (user) => {
    this.setState({
      authenticated: true,
      user,
    });
  };

  handleLogout = () => {
    localStorage.clear();
    this.setState({
      authenticated: false,
      user: {},
    });
  };
  render() {
    const { authenticated } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
        <nav>
          <NavBar authenticated={authenticated} handleLogout={this.handleLogout}/>
            {/* {authenticated && <Link to="/"> Home </Link>} */}
            {/* {!authenticated && <Link to="/login"> Login </Link>}
            {!authenticated && <Link to="/signup"> Signup </Link>} */}
            {/* {authenticated && (
              <Link to={"/"} onClick={this.handleLogout}>
                Logout
              </Link>
            )} */}
          </nav>
          <main className="mt-5">
          <Switch>
            <PrivateRoute
              exact
              path="/"
              user={this.state.user}
              authenticated={authenticated}
              component={Home}
            />
            <AnonRoute
              exact
              path="/login"
              authenticated={authenticated}
              authenticate={this.authenticate}
              component={Login}
            />
            <AnonRoute
              exact
              path="/signup"
              authenticated={authenticated}
              authenticate={this.authenticate}
              component={Signup}
            />
            {/* <Destinations/> */}
            <Route exact path="/destinations" component={Destinations}/>
	          <Route exact path="/activities" component={Activities} />
            <Route exact path="/activities/details/:id" component={ActivitiesDetails} />
            <Route exact path="/activities/create" component={CreateActivities} />
            <Route exact path="/activities/edit/:id" component={EditActivities} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/edit" component={EditProfile} />    
          </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
