import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import AnonRoute from "./components/auth/AnonRoute";
import PrivateRoute from "./components/auth/PrivateRoute";
import { validateSession } from "./services/userService";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Destinations from './pages/destinations/Destinations.js';
import destinations from './destinations.json';
import Activities from './pages/activities/Activities';
import ActivitiesDetails from './pages/activities/ActivitiesDetails';
import CreateActivities from './pages/activities/CreateActivities';
import EditActivities from './pages/activities/EditActivities';
import Profile from './pages/profile/Profile';
import EditProfile from './pages/profile/EditProfile';
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
    console.log ('IM LOGGING OUT')
    localStorage.clear();
    this.setState({
      authenticated: false,
      user: {},
    });
    this.props.history.push('/login')
  };
  render() {
    const { authenticated } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
        <nav>
          <NavBar />
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
            <Route exact path="/profile/edit" component={EditProfile} authenticated={authenticated} handleLogout={this.handleLogout}/>    
          </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
