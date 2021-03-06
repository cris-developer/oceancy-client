import React from 'react'
//import { getProfile} from '../../services/userService';
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import './Profile.css';
import NavBar from "../../components/navbar/NavBar";
//import Footer from "../../components/footer/Footer";


const Profile = ({user,handleLogout}) =>{

    console.log ('THIS IS HANDLELOG OUT:', handleLogout)
    console.log  ('I AM THE USER ON THE PROFILE PAGE:',user)
    
    const {fullName,photoUrl,favoriteActivity,level } = user

    const avatarImage = 'images/Avatar_Icon_Black.png'

   
    return (

              <>
                <NavBar/>
                        <nav className='mt-3'>
                           <div className='banner'>
                               <h2 className='headerText'>Profile</h2>
                           </div>
                           <div className="profileContainer">
                                <div className="profile">
                                    <div className="profileImage">
                                    {/* || '/Avatar_Icon_Black.png' */}
                                      <img src={photoUrl || avatarImage}  alt="UserImage" className="UserImg"/>   
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
                                        <Button variant='primary' className='profileLogOutBtn'  onClick={handleLogout} >
                                            Log Out
                                        </Button>
                                        <i className="fas fa-cog"></i>
                                    </div>
                                    {/* <div className="profileSettingsBtn" aria-label="profile settings" <i className="fas fa-cog" aria-hidden="true"><div></div> */}
                                    
                                </div>
                            </div>
                        </nav>
                    {/* <Footer/> */}
                 </>
        
    )
}

export default Profile

    
