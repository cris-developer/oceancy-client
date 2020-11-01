import React from 'react';
import './DestinationCard.css'

function DestinationCard({ photoUrl,destination }) {
    return (
        <div className='card'>
            <img src={photoUrl} alt="" />
            <div className="cardInfo">
                <p>{destination}</p>
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


// import React from 'react';
// import {
//   Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button
// } from 'react-bootstrap';

// const DestinationCard = (props) => {
//   return (
//     <div>
//       <Card>
//         <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
//         <CardBody>
//           <CardTitle>Card title</CardTitle>
//           <CardSubtitle>Card subtitle</CardSubtitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//           <Button>Button</Button>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default DestinationCard;