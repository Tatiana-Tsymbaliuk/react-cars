import React from 'react';
import '../Button/Button.css'

const Button =({onLoadFoto})=>{
        return (
                <button type="button" 
                className="Button"
                onClick ={onLoadFoto}>Learn more</button> 
        )
}

export default Button;