import { createPortal } from 'react-dom';
import '../Modal/Modal.css';
import { useEffect } from 'react';
import iconClose from '../../icons/close.svg';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ children, close, modalRef, closeDropDown }) => {
  const handleClose = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
      closeDropDown();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', handleClose);
    document.body.classList.add('noScroll');

    return () => {
      document.body.removeEventListener('keydown', handleClose);
      document.body.classList.remove('noScroll');
    };
  });

  return createPortal(
    <div className="overlay" onClick={handleClose}>
      <div className="modal" ref={modalRef}>
        <img
          className="close"
          src={iconClose}
          alt="Icon close"
          onClick={() => {
            close();
            closeDropDown();
          }}
        />
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;