import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AnonRoute from "./components/auth/AnonRoute";
import PrivateRoute from "./components/auth/PrivateRoute";
import { validateSession } from "./services/userService";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Destinations from './pages/destinations/Destinations.js';
//import destinations from './destinations.json';
import Activities from './pages/activities/Activities';
import ActivityDetails from './pages/activities/ActivityDetails';
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


  // constructor (props) {

  //   super (props)
  //   this.state = {
  //     authenticated: false,
  //     user: {},
      
  //    };
  //    //this.handleLogout.bind(this)
  //    this.authenticate.bind (this)
  // }

  
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
    //this.props.history.push('/login')
    console.log ('THIS PROPS IN HANDLELOGOUT:', this.props)
     //window.location = '/login'
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

            <Route 
            exact 
            path="/destinations" 
            user={this.state.user}
            authenticated={authenticated}
            component={Destinations}
            />
	          <Route 
            exact 
            path="/activities" 
            user={this.state.user}
            authenticated={authenticated}
            component={Activities} 
            />
            <Route 
            exact 
            path="/activities/details/:id" 
            user={this.state.user}
            authenticated={authenticated}
            component={ActivityDetails} 
            />
            <Route 
            exact 
            path="/activities/create"
            user={this.state.user}
            authenticated={authenticated}
            component={CreateActivities} 
            />
            <Route 
            exact 
            path="/activities/edit/:id"
            user={this.state.user}
            authenticated={authenticated}
            component={EditActivities} 
            />
            <PrivateRoute
            exact
            path="/profile"
            authenticated={authenticated}  
            user={this.state.user} 
            handleLogout ={this.handleLogout}  // to pass a function
            component={Profile} 

            />
            <PrivateRoute
            exact 
            path="/profile/edit" 
            authenticated={authenticated}  
            component={EditProfile} 
            user={this.state.user} 
            />   
          </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
