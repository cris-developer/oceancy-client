import React from 'react'
import  './ProfileCard.css'

const ProfileCard =(user) => { 
    return (
        <div className="pictureCard">
            <img className='profileImageCard' style = {{width:'30%'}} src={user.photoUrl} alt="avatar"></img>
        <div className="infoCard">
            <p><b>Full Name:</b>{user.fullName}</p>
            <p><b>Favorite Activity: </b>{user.favoriteActivity}</p>
            <p><b>Level: </b>{user.level}</p>
        </div>
    </div>
    );
  }
  export default ProfileCard

  