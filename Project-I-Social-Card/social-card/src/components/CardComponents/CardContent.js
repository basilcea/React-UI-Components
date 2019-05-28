import React from 'react';
import './Card.css';

const CardContent = ({cardContent, alink,avalue }) =>{
    return(
        <div className='card-content'>
        <h2>Get Started with React</h2>
            <p>{cardContent}</p>
            <a href={alink}>{avalue}</a>
        </div>
    )
}
export default CardContent;