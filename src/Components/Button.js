import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <button 
        className="Btn brand"
        >
            {props.label}
        </button>
    )
}

export default Button