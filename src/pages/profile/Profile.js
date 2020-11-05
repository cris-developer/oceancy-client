import React from 'react'
//import { getProfile} from '../../services/userService';
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
//import './profile.css'



const Profile = ({user,handleLogout}) =>{

    console.log ('THIS IS HANDLELOG OUT:', handleLogout)
    console.log  ('I AM THE USER ON THE PROFILE PAGE:',user)
    
    const {fullName,email,photoUrl,favoriteActivity } = user

   
    return (

              <>
                    <h1>TEST</h1>
                        <nav className='mt-3'>
                       
                            <img src={photoUrl} alt="UserImage" className="img"/>   
                                    
                                    <Button variant='primary'  onClick={handleLogout} >
                                    Log Out
                                    </Button>

                                    <Link  to="/profile/edit">
                                        <Button variant="outline-secondary">Edit Profile</Button>    
                                    </Link>   
                                    
                        </nav>
                        <main>
                                <div>{fullName}</div>  
                                <div>{favoriteActivity}</div> <div>{email}</div>   
                       </main>
                 </>
        
    )
}

export default Profile

    
       