import React, { Component } from "react";
import { getAllDestinations } from '../../services/destinationService';

import './topDestinations.css'

export default class TopDestinations extends Component {

    state = {
        destinations: undefined
    }

    componentDidMount() {

        getAllDestinations().then((res) =>{
            console.log("RESPUESTA DEL SERVICE", res)
            let topDestinations = []
            console.log(res)

            //Get 4 random destinations
            for(let i = 0; i < 4; i++) {
                let index = Math.floor(Math.random() * res.length)
                topDestinations.push(res[index])
                res.splice(index, 1)
            }
            this.setState({
              destinations: topDestinations,
            })
        }
          );
    }

    



    render() {
        console.log()
        return (<div className="top-destinations-wrapper-outer">
        {this.state.destinations && 
           <div className="top-destinations-wrapper"> 
           <div className="column-wrapper column1-wrapper">
                <div className="destinations-row">
                    <div className="top-destination-card-wrapper cw2x1">
                        <div className="image-wrapper">
                         <img src='images/Maldives_tropical_water_2121*1410.jpg'/>
                            {/* <img src={this.state.destinations[0].photoUrl} alt={this.state.destinations[0].name}/> */}
                        </div>
                        <div className="name-wrapper">{this.state.destinations[0].name}</div>
                    </div>
                </div>
                <div className="destinations-row two-elements">
                    <div className="top-destination-card-wrapper cw1x1">
                        <div className="image-wrapper">
                        <img src='images/Maldives_tropical_water_2121*1410.jpg'/>
                            {/* <img src={this.state.destinations[1].photoUrl} alt={this.state.destinations[1].name}/> */}
                        </div>
                        <div className="name-wrapper">{this.state.destinations[1].name}</div>
                    </div>
                    <div className="top-destination-card-wrapper cw1x1">
                        <div className="image-wrapper">
                          <img src='images/Maldives_tropical_water_2121*1410.jpg'/>
                            {/* <img src={this.state.destinations[2].photoUrl} alt={this.state.destinations[2].name}/> */}
                        </div>
                        <div className="name-wrapper">{this.state.destinations[2].name}</div>
                    </div>
                </div>
            </div>
            <div className="column-wrapper column2-wrapper">
                <div className="destinations-row">
                    <div className="top-destination-card-wrapper cw1x2">
                        <div className="image-wrapper">
                          <img src='images/Maldives_tropical_water_2121*1410.jpg'/>
                            {/* <img src={this.state.destinations[3].photoUrl} alt={this.state.destinations[3].name}/> */}
                        </div>
                        <div className="name-wrapper">{this.state.destinations[3].name}</div>
                    </div>
                </div>
            </div>
            </div>
            }
        </div>)
    }

}