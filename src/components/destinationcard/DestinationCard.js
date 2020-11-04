import React from 'react';
import './DestinationCard.css'

function DestinationCard({ photoUrl,name }) {
    return (

       <>
            <div className='DestinationCardContainer'>
                <div className="ActivityCardImage"> 
                    <img src={photoUrl} alt="" ></img>
                    
                </div>
                    <div className="cardInfo" >
                       <div className= 'destinationName'>
                          <h5>{name}</h5>
                       </div>
                    </div>
            </div>
        </>
         
    )   
 }

    //  <div className='card'>
    //             <img src={photoUrl} style={{width:'100%',objectFit:'cover',borderRadius:'10px'}}alt="ActivityCard"/>
    //             <div className="cardInfo">
    //                 <p className= 'destinationName' style = {{color:'white',position:'absolute',top:'20vh'}}>{destination}</p>
    //                 <p className= 'destinationText' style = {{color:'white',position:'absolute',top:'10vh'}}>{name}</p>
    //                 <p>{price}</p>
    //             </div>
    //         </div> 

export default DestinationCard


