import '../CarsListItem/CarsListItem.css'
import Button from 'components/Button';
const CarsListItem = ({car}) => {

    return(
    <li className="ImageGalleryItem">       
            <img 
            src={car.img} 
            alt={car.model} 
        //     onClick={() => onImageClick(image.largeImageURL)}
            className='ImageGalleryItem-image'/>
             <div>{car.model}{car.year}{car.rentalPrice}</div>
             <div><Button/></div>
          </li> );        
              }
// ImageGalleryItem.defaultProps = {
//                 tags: '',
//               };
              
export default CarsListItem;