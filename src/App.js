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
import Members from './pages/members/Members';
import NavBar from "./components/navbar/NavBar";
//import Footer from "./components/footer/Footer";


class App extends React.Component {

  state = {
      authenticated: false,
      user: {},
      activities: [],
      
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

    // setActivities = ()=> {
    //   this.setState({
    //     res:res
    //   })
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
        
          <NavBar />
            {/* {authenticated && <Link to="/"> Home </Link>} */}
            {/* {!authenticated && <Link to="/login"> Login </Link>}
            {!authenticated && <Link to="/signup"> Signup </Link>} */}
            {/* {authenticated && (
              <Link to={"/"} onClick={this.handleLogout}>
                Logout
              </Link>
            )} */}
          
          <main className="">
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
              authenticated={authenticated}     //props=variable (setState)
              authenticate={this.authenticate} //props=function
              component={Signup}
            />

            <PrivateRoute 
              exact 
              path="/destinations" 
              user={this.state.user}
              authenticated={authenticated}
              component={Destinations}
            />
	          <PrivateRoute 
              exact 
              path="/activities" 
              user={this.state.user}
              activities={this.state.activities}
              appSetState={this.setState.bind(this)}
              authenticated={authenticated}
              component={Activities} 
            />
            <PrivateRoute 
              exact 
              path="/activities/details/:id" 
              user={this.state.user}
              authenticated={authenticated}
              component={ActivityDetails} 
            />
            <PrivateRoute 
              exact 
              path="/activities/create"
              user={this.state.user}
              authenticated={authenticated}
              activities= {this.state.activities}
              appSetState={this.setState.bind(this)}
              component={CreateActivities} 
            />
            <PrivateRoute 
              exact 
              path="/activities/edit/:id"
              user={this.state.user}
              authenticated={authenticated}
              activities= {this.state.activities}
              appSetState={this.setState.bind(this)}
              component={EditActivities} 
            />
            <PrivateRoute
              exact
              path="/profile"
              user={this.state.user} 
              authenticated={authenticated}  
              handleLogout ={this.handleLogout}  // to pass a function
              component={Profile} 
            />
            <PrivateRoute
              exact 
              path="/profile/edit" 
              user={this.state.user} 
              authenticated={authenticated} 
              authenticate={this.authenticate} // to set state of the user 
              component={EditProfile} 
            /> 

            <Route
            exact 
            path="/members" 
            component={Members} 
            />  


            {/* <PrivateRoute
              exact
              path="/members"
              user={this.state.user} 
              authenticated={authenticated}  
              component={Members} 
            />  */}
          </Switch>
          
          </main>
          {/* <Footer/> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
