import React from 'react';
import './ActivityCard.css'


function ActivityCard({ photoUrl, name, destination, price }) {
    return (
        <div className='card' style ={{borderColor:'red'}}>
            <img src={photoUrl} style={{width:'100%',objectFit:'cover',borderRadius:'10px'}}alt="ActivityCard"/>
            <div className="cardInfo">
                <p className= 'destinationName' style = {{color:'white',position:'absolute',top:'20vh'}}>{destination}</p>
                <p className= 'destinationText' style = {{color:'white',position:'absolute',top:'10vh'}}>{name}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}


export default ActivityCard