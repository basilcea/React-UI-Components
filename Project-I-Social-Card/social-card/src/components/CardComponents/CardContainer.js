import React from 'react';
import './Card.css';
import '../CardComponents/CardBanner';
import CardContent from '../CardComponents/CardContent';
import CardBanner from '../CardComponents/CardBanner';
const redirect = (e)=>{
    e.preventDefault();
    window.location.href='https://www.reactjs.org';

}

const CardContainer = ({content , alink , avalue})=>{
    return(
        <div className ='card-container' onClick ={redirect}>
            <CardBanner />
            <CardContent  cardContent={content} alink={alink} avalue={avalue} />
        </div>
    )

}
export default CardContainer