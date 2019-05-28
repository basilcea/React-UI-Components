import React from 'react';
import './Header.css';

const HeaderTitle = ({title, handler, date}) => { 
    return (
        <div className='headerTitle'>
        <h1>{title}</h1>
        <span>{handler}</span>
        <span>{date}</span>
        </div>
       )
}
export default HeaderTitle;