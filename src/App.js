import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import AnonRoute from "./components/auth/AnonRoute";
import PrivateRoute from "./components/auth/PrivateRoute";
import { validateSession } from "./services/userService";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Signup from "./views/signup/Signup";
import Destinations from './views/destinations/Destinations.js'
import destinations from './destinations.json';
// import ActivitiesList from './views/activities/ActivitiesList'
// import ActivitiesDetail from './views/activities/ActivitiesDetail'
// import ActivitiesCreate from './views/activities/ActivitiesCreate'

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
            {authenticated && <Link to="/"> Home </Link>}
            {!authenticated && <Link to="/login"> Login </Link>}
            {!authenticated && <Link to="/signup"> Signup </Link>}
            {authenticated && (
              <Link to={"/"} onClick={this.handleLogout}>
                Logout
              </Link>
            )}
          </nav>
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
	          {/* <Route path="/activitiesList" component={ActivitiesList} />
            <Route path="/activitiesDetail" component={ActivitiesDetail} />
            <Route path="/activitiesCreate" component={ActivitiesCreate} />
            <Route path="/activitiesEdit" component={ActivitiesEdit} />
            <Route path="/profile" component={Profile} />
            <Route path="/profileEdit" component={ProfileEdit} />      */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
