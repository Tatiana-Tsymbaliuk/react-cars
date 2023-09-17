import React, { useState, useEffect } from 'react';
import '../Modal/Modal.css';
import { Link } from 'react-router-dom';

const Modal = ({ isOpen, onClose, car }) => {
  const [isEscKeyPressed, setIsEscKeyPressed] = useState(false);

  const getCity = address => {
    const splitedAdress = address.split(', ');
    const formated = splitedAdress.slice(1, -1).toString();
    return formated;
  };

  const getCountry = address => {
    const splitedAdress = address.split(', ');
    const formated = splitedAdress.slice(2).toString();
    return formated;
  };
  const arrayFromString = string => {
    const arrayed = string.split('\n');
    return arrayed;
  };

  const formatNumberMileage = number => {
    const numberFormat = number
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return numberFormat;
  };

  useEffect(() => {
    const handleEscKey = event => {
      if (event.key === 'Escape') {
        setIsEscKeyPressed(true);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isEscKeyPressed) {
      onClose();
    }
  }, [isEscKeyPressed, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modalBackdrop" onClick={onClose}>
      <div className="modalContent" onClick={e => e.stopPropagation()}>
        <button className="closeButton" onClick={onClose}>
          &times;
        </button>
        <img
          src={car.img}
          alt={car.model}
          //     onClick={() => onImageClick(image.largeImageURL)}
          className="carsListItemModal-image"
        />
        <div className="itemContainer">
          <div className="itemContainerTitlePrice">
            <h2 className="itemTitleModal">
              {car.make} {car.model}, {car.year}
            </h2>
            <h2 className="itemPrice">{car.rentalPrice}</h2>
          </div>
          <ul className="itemInfo">
            <li className="itemInfoItem">{getCity(car.address)}</li>
            <li className="itemInfoItem">{getCountry(car.address)}</li>
            <li className="itemInfoItem">{car.rentalCompany}</li>
            <li className="itemInfoItem">Premium</li>
            <li className="itemInfoItem">{car.type}</li>
            <li className="itemInfoItem">{car.model}</li>
            <li className="itemInfoItem">{car.id}</li>
            <li className="itemInfoItemLast">{car.accessories[2]}</li>
          </ul>
          <div>
            <p className="itemDescription">{car.description}</p>
          </div>
          <div className="itemAccessoriesInfo">
            <p className="itemAccessories">Accessories and functionalities:</p>
            <ul className="itemInfo">
              {car.accessories.map(accessori => (
                <li className="itemInfoItem">{accessori}</li>
              ))}
            </ul>
            <ul className="itemInfo">
              {car.functionalities.map(functionaliti => (
                <li className="itemInfoItem">{functionaliti}</li>
              ))}
            </ul>
          </div>
          <div className="rentalDescr">
            <h4 className="rentalDescrTitle">Rental Conditions: </h4>
            <ul className="rentalDescrArray">
              {arrayFromString(car.rentalConditions).map((item, index) => {
                if (item.includes(':')) {
                  return (
                    <li key={index} className="rentalDescrArrayItem">
                      {' '}
                      {item.split(':')[0]}:{' '}
                      <span className="rentalDescrArrayItemSpan">
                        {item.split(':')[1]}
                      </span>{' '}
                    </li>
                  );
                } else {
                  return (
                    <li key={index} className="rentalDescrArrayItem">
                      {item}
                    </li>
                  );
                }
              })}
              <li className="rentalDescrArrayItem">
                Mileage:{' '}
                <span className="rentalDescrArrayItemSpan">
                  {formatNumberMileage(car.mileage)}
                </span>
              </li>
              <li className="rentalDescrArrayItem">
                Price:{' '}
                <span className="rentalDescrArrayItemSpan">
                  {car.rentalPrice}
                </span>
              </li>
            </ul>
          </div>
          <div className="rentCarBtn">
            <Link
              className="rentCarBtnLink"
              data-rel="external"
              to="tel:+380730000000"
              target="blank"
            >
              Rental car
            </Link>
          </div>
          {/* Додайте іншу інформацію про авто */}
        </div>
      </div>
    </div>
  );
};

export default Modal;

// import { createPortal } from 'react-dom';
// import '../Modal/Modal.css';
// import { useEffect } from 'react';
// import iconClose from '../../icons/close.svg';

// const modalRoot = document.getElementById('modal-root');

// const Modal = ({ children, close, modalRef, closeDropDown }) => {
//   const handleClose = ({ target, currentTarget, code }) => {
//     if (target === currentTarget || code === 'Escape') {
//       close();
//       closeDropDown();
//     }
//   };

//   useEffect(() => {
//     document.body.addEventListener('keydown', handleClose);
//     document.body.classList.add('noScroll');

//     return () => {
//       document.body.removeEventListener('keydown', handleClose);
//       document.body.classList.remove('noScroll');
//     };
//   });

//   return createPortal(
//     <div className="overlay" onClick={handleClose}>
//       <div className="modal" ref={modalRef}>
//         <img
//           className="close"
//           src={iconClose}
//           alt="Icon close"
//           onClick={() => {
//             close();
//             closeDropDown();
//           }}
//         />
//         {children}
//       </div>
//     </div>,
//     modalRoot
//   );
// };

// export default Modal;
