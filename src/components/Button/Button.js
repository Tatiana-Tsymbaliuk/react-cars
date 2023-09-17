import React from 'react';
import '../Button/Button.css';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';

const Button =()=>{
        const [showModal, setShowModal] = useState(false);
        
      
        const handleOpenModal = () => {
          setShowModal(true);
          
        };

        const handleCloseModal = () => {
                setShowModal(false);
              };

        return (<>
                <button type="button" 
                className="ButtonLearn"
                onClick ={handleOpenModal}>Learn more</button> 
                {showModal && (
                        <Modal close={handleCloseModal}/>
                      )}</>
        )
}

export default Button;