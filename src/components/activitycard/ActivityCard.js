import React from 'react';
import './ActivityCard.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


function ActivityCard({ photoUrl, name, destination, price, id }) {
    console.log(price)
    return (
        
           <div className='ActivityCardContainer' >
          
                 <div className="ActivityCardImage"> 
                    <img src={photoUrl} alt="ActivityCard"/>
                 </div> 
            
                <div className="ActivityCardInfo">
                    
                    <div className= 'activityName'style={{fontWeight:'700'}}>
                         <h4>{name}</h4> 
                    </div>
                    <div className ='activityDetails'>
                        <div className="duration" >4 days</div>
                        <div className="price-wrapper">{"$400.00"}</div>
                    </div>
                </div>

                <div className="details-button-wrapper">
                    <Link to={"/activities/details/" + id} >
                        <Button variant="outline-primary">View details</Button>
                    </Link>
                   
                </div>
         </div> 
        
    )
}


export default ActivityCard