import React, { Component } from 'react'
import { getProfile} from '../../services/userService';
import {Container,Row,Col,ListGroup,Form,button}  from 'react-bootstrap'
import { Link } from 'react-router-dom'
//import './profile.css'


export class Profile extends Component {

    // state = {
    //     fullName: '',
    //     email: '',
    //     password: '',
    //     photoUrl :'',
    //     favoriteActivity :'',
    //     errorMessage: '',
    //     //user :this.props.

    //      }
      
    //      componentDidMount()  {
              
    //         //console.log ('GETTING MY PROFILE ON CLIENT SIDE')
    //         //const sessionId= localStorage.getItem("accessToken")
    //         console.log('sessionId:',sessionId)
    //         //'5fa03d60d8c33f71fe98afc1'

            
    //         getProfile(this.state.user)
    //           .then(response => {
    //               console.log ('WHAT IT IS HAPPENING GETTING PROFILE ON CLIENT SIDE:',response.data)
    //               this.setState({ 
    //                   //user :response
    //                  fullName: response.fullName,
    //                  email :response.email,
    //                  password :response.email,
    //                  favoriteActivity :response.favoriteActivity,
    //                  photoUrl :response.photoUrl,
    //                 });
    //             console.log("RESULT:", response);
    //           })
    //           .catch((err)=>{
    //               console.log(err)
    //           });
    //      }

    //      handleLogout = (e) => {
    //         e.preventDefault();
    //         console.log ('IM LOGGING OUT')
    //         localStorage.clear();
    //         this.setState({
    //           authenticated: false,
    //           user: {},
    //         });
    //         this.props.history.push('/login')
    //       };

        render() {
            const {fullName,email, password,photoUrl,favoriteActivity } =this.state
            console.log ('I AM RENDERING THE PROFILE')
            return (
                <>
                        <h1>TEST</h1>
                        <nav>
                       
                           <img src={photoUrl} alt="UserImage" className="img"  style={{width: '50%'}}/>   
                            
                            <Link  to={'/login'} onClick={this.handleLogout} >
                               <div className="btn btn-primary">Log Out</div>
                            </Link>
                            <Link  to="/profile/edit">
                                <div className="btn btn-primary">Edit Profile</div>  
                            </Link>        
                        </nav>
                        <main>
                                <div>{fullName}</div>  
                                <div>{favoriteActivity}</div> <div>{email}</div>   
                        </main>
                </>
            )
        }


}



    

export default Profile







// class Profile extends Component {
   
//         state = {
//             firstName: "",
//             lastName: "",
//             isFriendly: false,
//             gender: "",
//             favColor: "blue"
//         }
        
   
    
//     handleChange(event) {
//         const {name, value, type, checked} = event.target
//         type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
//     }
    
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input 
//                     type="text" 
//                     value={this.state.firstName} 
//                     name="firstName" 
//                     placeholder="First Name" 
//                     onChange={this.handleChange} 
//                 />
//                 <br />
//                 <input 
//                     type="text" 
//                     value={this.state.lastName} 
//                     name="lastName" 
//                     placeholder="Last Name" 
//                     onChange={this.handleChange} 
//                 />
                
//                 {
//                     /**
//                      * Other useful form elements:
//                      * 
//                      *  <textarea /> element
//                      *  <input type="checkbox" />
//                      *  <input type="radio" />
//                      *  <select> and <option> elements
//                      */
//                 }
                
//                 <textarea 
//                     value={"Some default value"}
//                     onChange={this.handleChange}
//                 />
                
//                 <br />
                
//                 <label>
//                     <input 
//                         type="checkbox" 
//                         name="isFriendly"
//                         checked={this.state.isFriendly}
//                         onChange={this.handleChange}
//                     /> Is friendly?
//                 </label>
//                 <br />
//                 <label>
//                     <input 
//                         type="radio" 
//                         name="gender"
//                         value="male"
//                         checked={this.state.gender === "male"}
//                         onChange={this.handleChange}
//                     /> Male
//                 </label>
//                 <br />
//                 <label>
//                     <input 
//                         type="radio" 
//                         name="gender"
//                         value="female"
//                         checked={this.state.gender === "female"}
//                         onChange={this.handleChange}
//                     /> Female
//                 </label>
//                 {/* Formik */}
//                 <br />
                
//                 <label>Favorite Color:</label>
//                 <select 
//                     value={this.state.favColor}
//                     onChange={this.handleChange}
//                     name="favColor"
//                 >
//                     <option value="blue">Blue</option>
//                     <option value="green">Green</option>
//                     <option value="red">Red</option>
//                     <option value="orange">Orange</option>
//                     <option value="yellow">Yellow</option>
//                 </select>
                
//                 <h1>{this.state.firstName} {this.state.lastName}</h1>
//                 <h2>You are a {this.state.gender}</h2>
//                 <h2>Your favorite color is {this.state.favColor}</h2>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }

// export default Profile
