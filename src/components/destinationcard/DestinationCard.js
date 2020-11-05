import React from 'react';
import './DestinationCard.css'

function DestinationCard({ photoUrl,name }) {
    return (

       <>
            <div className='DestinationCardContainer'>
                <div className="DestinationCardImage"> 
                    <img src={photoUrl} alt="" ></img> 
                </div>
                <div className="cardInfo" >
                    <span>{name}</span>
                </div>
            </div>
        </>
         
    )   
 }



export default DestinationCard
