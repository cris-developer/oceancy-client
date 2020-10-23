import React from 'react';
import './DestinationCard.css'

function DestinationCard({ photoUrl,name }) {
    return (
        <div className='card'>
            <img src={photoUrl} alt="" />
            <div className="card_info">
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default DestinationCard


// import React from 'react';
// import {
//   Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button
// } from 'reactstrap';

// const Example = (props) => {
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

// export default Example;