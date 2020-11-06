import React from 'react'
//import { getProfile} from '../../services/userService';
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import './Profile.css'



const Profile = ({user,handleLogout}) =>{

    console.log ('THIS IS HANDLELOG OUT:', handleLogout)
    console.log  ('I AM THE USER ON THE PROFILE PAGE:',user)
    
    const {fullName,email,photoUrl,favoriteActivity,level } = user
   
    return (

              <>
                        <nav className='mt-3'>
                           <div class="profileContainer">
                                <div class="profile">
                                    <div class="profileImage">
                                      <img src={photoUrl} alt="UserImage" className="UserImg"/>   
                                    </div>
                                    <div class="profileUserSettings">
                                        <div className ='profileUserName'>{fullName}</div>  
                                    </div>
                                    <Link  to="/profile/edit">
                                        <Button variant="outline-secondary" className="profileEditBtn">Edit Profile</Button>
                                    </Link>   
                                    
                                    <Button variant='primary'  onClick={handleLogout} >
                                        Log Out
                                    </Button>
                                    {/* <div className="profileSettingsBtn" aria-label="profile settings" <i class="fas fa-cog" aria-hidden="true"><div></div> */}
                                    <div>
                                        <div>{favoriteActivity}</div> <div>{email}</div>
                                        <div>{level}</div>  
                                    </div>
                                </div>
                            </div>
                        </nav>
                 </>
        
    )
}

export default Profile

    
