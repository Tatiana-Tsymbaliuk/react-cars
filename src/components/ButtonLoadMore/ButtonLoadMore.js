import React from 'react';
import '../ButtonLoadMore/ButtonLoadMore.css'

const ButtonLoadMore =({onLoadFoto})=>{
        return (
                <button type="button" 
                className="ButtonLoad"
                onClick ={onLoadFoto}>Load more</button> 
        )
}

export default ButtonLoadMore;