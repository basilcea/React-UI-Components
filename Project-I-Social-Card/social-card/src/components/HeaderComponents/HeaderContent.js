import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';


const HeaderContent = ({title, handler , date, headerText}) =>{
    return (
        <div className='headerContent'>
            <HeaderTitle  title={title} handler={handler} date={date} />
            <p>{headerText}</p>
        </div>
    )
}
export default HeaderContent;
