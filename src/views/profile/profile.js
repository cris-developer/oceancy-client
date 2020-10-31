import React, { Component } from 'react'
import { getProfile} from '../../services/userService';
import {Container,Row,Col,ListGroup,Form,button}  from 'react-bootstrap'
import { Link } from 'react-router-dom'
//import './profile.css'


export class Profile extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        photoUrl :'',
        favoriteActivity :'',
        errorMessage: '',
         }
      
         componentDidMount() {
            const {params} =this.props.match;
            console.log ('params:',params.id)
            console.log ('GETTING MY PROFILE ON CLIENT SIDE')
          getProfile(params.id)
              .then(response => {
                  this.setState({ 
                      state : response
                    });
                console.log(response);
              })
              .catch((err)=>{
                  console.log(err)
              })
        }



    render() {
        const {username,email, password,photoUrl,favoriteActivity } =this.state
        return (
            <>
                    <h1>TEST</h1>
                    <nav>
                       <img src={photoUrl} alt="UserImage" className="img"  style={{width: '50%'}}/>           
                        <Link  to="/" onClick={this.handleLogout}>
                            <div className="btn btn-primary">Log Out</div>
                        </Link>
                        <Link  to="/user/profile/edit">
                            <div className="btn btn-primary">Edit Profile</div>  
                        </Link>        
                    </nav>
                    
                    <main>
                            <div>{username}</div>  
                            <div>{favoriteActivity}</div>  
                    </main>
            </>
        )
    }
}

export default Profile






