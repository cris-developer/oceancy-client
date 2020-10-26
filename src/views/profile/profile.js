import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap'
import { getAllActivities} from '../../services/activityService';


export class profile extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default profile



// class Form extends Component {
//     constructor(props) {
//         super(props);
        
//         this.initialState = {
//             name: '',
//             job: ''
//         };

//         this.state = this.initialState;
//     }

//     handleChange = event => {
//         const { name, value } = event.target;

//         this.setState({
//             [name] : value
//         });
//     }

//     onFormSubmit = (event) => {
//         event.preventDefault();
        
//         this.props.handleSubmit(this.state);
//         this.setState(this.initialState);
//     }

//     render() {
//         const { name, job } = this.state; 

//         return (
//             <form onSubmit={this.onFormSubmit}>
//                 <label for="name">Name</label>
//                 <input 
//                     type="text" 
//                     name="name" 
//                     id="name"
//                     value={name} 
//                     onChange={this.handleChange} />
//                 <label for="job">Job</label>
//                 <input 
//                     type="text" 
//                     name="job" 
//                     id="job"
//                     value={job} 
//                     onChange={this.handleChange} />
//                 <button type="submit">
//                     Submit
//                 </button>
//             </form>
//         );
//     }
// }

// export default Form;


// import React, { Component } from 'react';
// import './SignUp.css';

// export default class SignUp extends Component {
//   state = {
//     email: '',
//     password: '',
//     nationality: '',
//   };

//   handleInputChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   isPwWeak = () => {
//     const mediumRegex = new RegExp(
//       '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
//     );
//     return mediumRegex.test(this.state.password) ? false : true;
//   };

//   isEmailWeak = () => {
//     const emailRegex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
//     return emailRegex.test(this.state.email) ? false : true;
//   };

//   cancelSubmit = (e) => {
//       e.preventDefault();
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.cancelSubmit}>
//           <div className="form-group">
//             <label for="exampleInputEmail1">Email</label>
//             <input
//               type="email"
//               name="email"
//               className={
//                 this.isEmailWeak()
//                   ? 'form-control is-invalid'
//                   : 'form-control is-valid'
//               }
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               placeholder="john@email.com"
//               onChange={this.handleInputChange}
//               value={this.state.email}
//             />
//             <div className="valid-feedback" >
//                 Email accepted!
//             </div>
//             <div className="invalid-feedback" >
//                 Invalid email
//             </div>
//           </div>
//           <div className="form-group">
//             <label for="exampleInputPassword1">Password</label>
//             <input
//               type="password"
//               name="password"
//               className={
//                 this.isPwWeak()
//                   ? 'form-control is-invalid'
//                   : 'form-control is-valid'
//               }
//               placeholder="password123"
//               value={this.state.password}
//               onChange={this.handleInputChange}
//             />
//             <div className="valid-feedback" >
//                 Password accepted!
//             </div>
//             <div className="invalid-feedback" >
//                 Password not strong enough
//             </div>
//           </div>
//           <div className="form-group">
//             <label for="exampleFormControlSelect1">Nationality</label>
//             <select
//               className="form-control"
//               name="nationality"
//               id="exampleFormControlSelect1"
//               onChange={this.handleInputChange}
//             >
//               <option value="en">English</option>
//               <option value="de">German</option>
//               <option value="fr">French</option>
//             </select>
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//           <hr />
//         </form>
//       </div>
//     );
//   }
// }


// import React, { Component } from 'react'

// import UserService from './../../../service/UserService'

// import Spinner from './../../UI/Spinner'
// import Container from 'react-bootstrap/esm/Container'
// import Row from 'react-bootstrap/esm/Row'
// import Col from 'react-bootstrap/esm/Col'
// import ListGroup from 'react-bootstrap/esm/ListGroup'
// import { Link } from 'react-router-dom'
// import './profile.css'


// class Profile extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             profile: undefined,
//             showModal: false,
//         }

//         this.UserService = new UserService()
//     }

//     componentDidMount = () => {
//         const id = this.props.match.params.id
//         this.UserService
//             .getProfile(id)
//             .then(response => this.setState({ profile: response.data }))
//             .catch(err => console.log(err))

//     }

//     handleModal = status => this.setState({ showModal: status })


//     render() {

//         return (

//             <>

//                 {!this.state.profile ? <div className="spinner"><Spinner /></div> :


//                     (<div>
//                         <div className="page-bg"></div>
//                         <Container as='main'>

//                             <Row className="profile-row">
//                                 <Col md={{ span: 6 }}>
//                                     <h1>¡Hola, <span className="text-lightblue">{this.props.loggedInUser.username}</span>!</h1>
//                                 </Col>
//                                 <Col md={{ span: 6 }}>
//                                     <div className="edit-btn-div">
//                                         <Link to={`/profile/edit/${this.props.loggedInUser._id}`}>
//                                             <button className="button-login-signup"><span>Editar mi perfil</span></button>
//                                         </Link>
//                                     </div>
//                                 </Col>
//                             </Row>
//                             <Row className="profile-row">

//                                 <Col className="card-motorbike" md={{ span: 6 }}>
//                                     <h3>Moto actual</h3>

//                                     <img className="usermotorbike-img" src={this.state.profile.userMotorbike.image_url} alt="userMotorbike" />
//                                     <p className="style-p" >{this.state.profile.userMotorbike.brand} {this.state.profile.userMotorbike.model}</p>

//                                 </Col>

//                                 <Col className="card-motorbike" md={{ span: 6 }} >
//                                     <h3>Friend's lists</h3>

//                                     <ListGroup>
//                                         {this.state.profile.friends.map(friend =>
//                                             <Link to={`/profile/public/${friend._id}`}><ListGroup.Item action variant="light" key={friend.id} className="center style-friend">{friend.username}</ListGroup.Item></Link>)}
//                                     </ListGroup>
//                                 </Col>

//                             </Row>
//                             <hr />
//                             <h3 className="style-p">Activities i am attending</h3>
//                             <Row className="profile-row">
//                                 <ListGroup horizontal className="scroll-x">
//                                     {this.state.profile.activities.map(event =>
//                                         <ListGroup.Item className="transparent">
//                                             <Link to={`/eventDetails/${event._id}`}>
//                                                 <Col xs={{ span: 12 }} >
//                                                     <Col>
//                                                         <img variant="top" className="event-img" src={event.image_url} alt={event.name} />
//                                                     </Col>
//                                                     <Col>
//                                                         <p className="name-event">{event.name}</p>
//                                                     </Col>
//                                                 </Col>
//                                             </Link>
//                                         </ListGroup.Item>
//                                     )}
//                                 </ListGroup>
//                             </Row>
//                         </Container>
//                     </div>)
//                 }
//             </>
//         )
//     }
// }

// export default Profile

