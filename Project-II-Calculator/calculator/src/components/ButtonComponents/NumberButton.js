import React from 'react';
import './Button.css';

const NumberButton = (props, handler)=>{
    return(
        <button className={props.buttonStyle} onClick={handler}>{props.text}</button>
    )
}
export default NumberButton;