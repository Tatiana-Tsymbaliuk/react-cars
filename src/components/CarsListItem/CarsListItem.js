import '../CarsListItem/CarsListItem.css'
import Button from '../Button/Button';

import AddCar from 'components/AddCar';


const CarsListItem = ({car}) => {
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
    return(
    <li className="CarsListItem"> 
    <AddCar className="AddCar" car={car}/>
   <img 
     src={car.img} 
     alt={car.model} 
        //     onClick={() => onImageClick(image.largeImageURL)}
     className='CarsListItem-image'/>
      
      <div className="ItemContainer">
			<div className="ItemContainerTitlePrice">
			<h2 className="ItemTitle">{car.make} {car.model}, {car.year}</h2>
			<h2 className="ItemPrice">{car.rentalPrice}</h2>
			</div>	
            
			<ul className="ItemInfo">
				<li className="ItemInfoItem">{getCity(car.address)}</li>
				<li className="ItemInfoItem">{getCountry(car.address)}</li>
				<li className="ItemInfoItem">{car.rentalCompany}</li>
				<li className="ItemInfoItem">Premium</li>
				<li className="ItemInfoItem">{car.type}</li>
				<li className="ItemInfoItem">{car.model}</li>
				<li className="ItemInfoItem">{car.id}</li>
				<li className="ItemInfoItemLast">{car.accessories[2]}</li>
            </ul>
           <Button/>
           </div></li>)       
              }

export default CarsListItem;