import React from 'react';
import './Card.css';
import '../CardComponents/CardBanner';
import CardContent from '../CardComponents/CardContent';
import CardBanner from '../CardComponents/CardBanner';

const CardContainer = ({image, imageAlt,  content , alink , avalue})=>{
    return(
        <div className ='card-container'>
            <CardBanner  bannerLink = {image}  bannerAlt ={imageAlt} />
            <CardContent  cardContent={content} alink={alink} avalue={avalue} />
        </div>
    )

}
export default CardContainer