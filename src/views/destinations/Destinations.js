import React, { Component } from 'react'

import destinations from '../../destinations.json';


class Destinations extends Component {

    state = {
        destinations: destinations.slice(0, 3)
      }
    render() {
        return (
            <div>
            
               <section>
                <h2>Destinations</h2>
                <div className="buttonGroup">
                </div>
                </section>
                <section >
                <table>
                    <thead>
                        <tr>
                            <th id="heading">Picture</th>
                            <th d="heading">Name</th>
                            <th d="heading">Popularity</th>
                            <th d="heading">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.destinations.map((el, idx) => (
                        <tr key={idx}>
                        <th>
                            <img src={el.pictureUrl} alt="Contact" />
                        </th>
                            <th className= 'contentText'>  {el.name}</th>
                            <th className= 'contentText'>{el.rating.toFixed(2)}</th>
                            {/* <th><button className = 'rigthButton' onClick={this.deleteContacts}>Delete</button></th> */}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section> 
        </div>
        )
    }
}

export default Destinations;




