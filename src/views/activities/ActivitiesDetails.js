import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import { createActivity } from '../../services/activityService';
import {  Link } from "react-router-dom";

export class ActivitiesDetails extends Component {
    constructor(props){
        super(props);
        console.log(this.props.match.params.id);

    }
    render() {
        return (
            <div>
                <Link to={"activities/edit/" + this.props.match.params.id}>
                  Edit
                </Link>
                <Link to={"activities/delete/" + this.props.match.params.id}>
                  Delete
                </Link>
            </div>
        )
    }
}

export default ActivitiesDetails



// import React from 'react';
// import { Form,Button } from 'react-router-dom';
// import { getActivityDetails } from '../services/api-client';
// import './SingleBeer.css'

// export default class OneBeer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.props = props;
//     }

//     state = {
//         activities: null
//     };

//     componentDidMount() {
//         getSingleBeer(this.props.match.params.id)
//             .then(beer => {
//                 this.setState({
//                     beer
//                 })
//             })

//     };

//     render() {
//         const beer = this.state.beer


//         if (!beer) {
//             return (
//                 <div>Loading...</div>
//             )
//         } else {
//             return (
//                 <div className="singleBeer">
//                     <div>
//                         <div className="singleBeerDetai">
//                             <img src={beer.image_url} className="singleBeerImg" alt="beer" />
//                             <div>
//                                 <div className="beerDescription">
//                                     <h3>{beer.name.slice(0, 26)}</h3>
//                                     <p>{beer.first_brewed}</p>
//                                 </div>
//                                 <div className="beerNumber">
//                                     <h4>{beer.attenuation_level}</h4>
//                                     <h5>{beer.tagline}</h5>
//                                 </div>
//                                 <p>{beer.description}</p>
//                                 <p>{beer.contributed_by}</p>
//                                 <Link to="/beers">
//                                     <div className="btn btn-primary">All beers</div>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             );
//         }
//     };
// };
