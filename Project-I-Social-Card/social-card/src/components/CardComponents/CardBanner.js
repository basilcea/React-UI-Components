import React from 'react';
import './Card.css';

const CardBanner = ({ bannerLink ,bannerAlt }) =>{
    return(
        <div className='card-banner'>
        <img src={bannerLink} alt={bannerAlt} />
        </div>
    )
}
export default  CardBanner;