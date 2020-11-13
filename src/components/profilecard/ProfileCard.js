import React from 'react'
import  './ProfileCard.css'

const ProfileCard =(user) => { 
    return (
        <div className="pictureCard">
            <div className="pictureCardImageWrapper">
            <img className='' src={user.photoUrl} alt="avatar"></img>
            </div>
            
        <div className="infoCard">
            <div className="field-wrapper"><span><b>Full Name:</b></span><span>{user.fullName}</span></div>
            <div className="field-wrapper"><span><b>Favorite Activity: </b></span><span>{user.favoriteActivity}</span></div>
            <div className="field-wrapper"><span><b>Level: </b></span><span>{user.level}</span></div>
        </div>
    </div>
    );
  }
  export default ProfileCard

  