import React from 'react';
import './ActivityCard.css'


function ActivityCard({ photoUrl, name, destination, price }) {
    return (
        <div className='Activitycard' style ={{borderColor:'red'}}>
            <img src={photoUrl} style={{width:'100%',objectFit:'cover',borderRadius:'10px'}}alt="ActivityCard"/>
            <div className="ActiviycardInfo">
                <p className= 'activityDestination' style = {{color:'white',position:'absolute',top:'20vh'}}>{destination}</p>
                <p className= 'activityName' style = {{color:'white',position:'absolute',top:'10vh'}}>{name}</p>
                <p className ='activityPhotoUrl'>{price}</p>
            </div>
        </div>
    )
}


export default ActivityCard