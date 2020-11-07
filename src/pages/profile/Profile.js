import React from 'react'
//import { getProfile} from '../../services/userService';
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import './Profile.css'



const Profile = ({user,handleLogout}) =>{

    console.log ('THIS IS HANDLELOG OUT:', handleLogout)
    console.log  ('I AM THE USER ON THE PROFILE PAGE:',user)
    
    const {fullName,photoUrl,favoriteActivity,level } = user
   
    return (

              <>
                        <nav className='mt-3'>
                           <div className="profileContainer">
                                <div className="profile">
                                    <div className="profileImage">
                                      <img src={photoUrl} alt="UserImage" className="UserImg"/>   
                                    </div>
                                    <div className="profileUserSettings">
                                        <div className ='profileUserName'>{fullName}</div>  
                                    </div>
                                    <div className ='activityGroup'>
                                        <div className='favoriteActivity'> Favorite Water Activity :  {favoriteActivity}</div> 
                                        <div className='level'>Level : {level}</div>
                                    </div>
                                    <div className= "profileButtonGroup">
                                        <Link  to="/profile/edit">
                                            <Button variant="outline-secondary" className="profileEditBtn">Edit Profile</Button>
                                        </Link>   
                                        <Button variant='primary' className='profileLogOutBtn' onClick={handleLogout} >
                                            Log Out
                                        </Button>
                                    </div>
                                    {/* <div className="profileSettingsBtn" aria-label="profile settings" <i className="fas fa-cog" aria-hidden="true"><div></div> */}
                                    
                                </div>
                            </div>
                        </nav>
                 </>
        
    )
}

export default Profile

    
