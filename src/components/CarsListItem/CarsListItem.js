import '../CarsListItem/CarsListItem.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import AddCar from 'components/AddCar';

const CarsListItem = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <li className="carsListItem">
      <AddCar className="addCar" car={car} />
      <img src={car.img} alt={car.model} className="carsListItem-image" />

      <div className="itemContainer">
        <div className="itemContainerTitlePrice">
          <h2 className="itemTitle">
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
        <Button openModal={openModal} />
        <Modal isOpen={isModalOpen} onClose={closeModal} car={car} />
      </div>
    </li>
  );
};

export default CarsListItem;
