import React from 'react';
import '../ButtonLoadMore/ButtonLoadMore.css'

const ButtonLoadMore =({onLoadMore})=>{
        return (
                <button type="button" 
                className="ButtonLoad"
                onClick ={onLoadMore}>Load more</button> 
        )
}

export default ButtonLoadMore;