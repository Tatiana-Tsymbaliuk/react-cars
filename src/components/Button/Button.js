import React from 'react';
import '../Button/Button.css';

const Button =({openModal})=>{


        return (<>
                <button type="button" 
                className="ButtonLearn"
                onClick={openModal} >Learn more</button> 
                      </>
        )
}

export default Button;