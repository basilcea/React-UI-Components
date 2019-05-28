import React from 'react';
import './Header.css';

const ImageThumb = ({link ,imagedesc})=>{
    return (
        <div className='imageDiv'>
        <img src={link} alt={imagedesc}/>
        </div>
    )
}
export default ImageThumb;


