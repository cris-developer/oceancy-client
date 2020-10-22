import React from 'react';
import './DestinationCard.css'

function DestinationCard({ src, title, description, price }) {
    return (
        <div className='card'>
            <img src={src} alt="" />
            <div className="card_info">
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default DestinationCard