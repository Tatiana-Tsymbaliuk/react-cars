// import { Link } from "react-router-dom";
import CarsListItem from "components/CarsListItem/CarsListItem";
import "../CarsList/CarsList.css"

const CarsList = ({cars}) =>{
        console.log(cars);
        
        return(<>
        <ul className="ImageGallery">
           {cars.map(car=>{
                return(
                 <CarsListItem 
                 key={car.id}
                 car={car}/>       
                )
           })}     
        </ul>
        {/* <ul>
        {cars.map(({id, model})=> (
                       <Link to={(`/cars/${id}`)}><li key ={id}>{model}</li></Link>
                      
                        ))}     
                </ul> */}
                </>
        )
}
export default CarsList;