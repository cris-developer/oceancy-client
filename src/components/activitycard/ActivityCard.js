import React from 'react';
import './ActivityCard.css'
import { Link } from 'react-router-dom'
import {Card} from 'react-bootstrap'
import { Button } from 'react-bootstrap'


function ActivityCard({ photoUrl, name, destination, price, id }) {
    console.log(price)
    return (
        // <Card style={{ width: '20 rem'}}>
        //      <Card.Img variant="top" src={photoUrl}  style={{ width: '20rem',heigh:'16rem'}} alt="ActivityCard"/>
        //  </Card>
           <div className='ActivityCardContainer' >
          
                 <div className="ActivityCardImage"> 
                    <img src={photoUrl} style={{width:'100%',objectFit:'cover',borderRadius:'10px'}}alt="ActivityCard"/>
                 </div> 
            
                <div className="ActivityCardInfo">
                    {/*<p className= 'activityDestination' style = {{top:'30vh'}}>{destination}</p>*/}
                    <div className= 'activityName'>{name}</div>
                    <div className ='activityDetails'>
                        <div className="duration">4 days</div>
                        <div className="price-wrapper">{"$400.00"}</div>
                    </div>
                </div>

                <div className="details-button-wrapper">
                    <Link to={"/activities/details/" + id} >
                        <Button>details</Button>
                    </Link>
                </div>
         </div> 
        
    )
}


export default ActivityCard