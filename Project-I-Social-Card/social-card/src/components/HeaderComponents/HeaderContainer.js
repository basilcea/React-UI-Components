import React from 'react';
import './Header.css';
import ImageThumb from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = ({link, description,title, handler , date , headerText})=> {
    return(
        <div className='header'>
            <ImageThumb link={link} imagedesc={description} />
            <HeaderContent  title={title} handler={handler} date={date} headerText ={headerText}/>
        </div>
    )

}
export default HeaderContainer 