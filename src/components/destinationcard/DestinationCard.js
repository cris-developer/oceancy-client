import React from 'react';
import './DestinationCard.css'

function DestinationCard({ photoUrl,name }) {
    return (

        <div className='DestinationCardContainer'>
            <div className='card'> 
                <img src={photoUrl} alt="" style={{ width:'100%', minHeight:'300px',maxHeight:'300px',borderRadius:'10px'}}></img>
                <div className="cardInfo" >
                    <p style = {{color:'white',position:'absolute',top:'20vh', borderColor:'red'}}>{name}</p>
                </div>
            </div>
         </div>
    )   
 }

{/* <div className='card' style ={{borderColor:'red'}}>
            <img src={photoUrl} style={{width:'100%',objectFit:'cover',borderRadius:'10px'}}alt="ActivityCard"/>
            <div className="cardInfo">
                <p className= 'destinationName' style = {{color:'white',position:'absolute',top:'20vh'}}>{destination}</p>
                <p className= 'destinationText' style = {{color:'white',position:'absolute',top:'10vh'}}>{name}</p>
                <p>{price}</p>
            </div>
        </div> */}

export default DestinationCard


