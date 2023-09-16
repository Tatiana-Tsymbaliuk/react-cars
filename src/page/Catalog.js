import { useState, useEffect } from "react";
import { fetchForCatalog } from "../api/api"
import CarsList from "../components/CarsList/CarsList"
import ButtonLoadMore from "../components/ButtonLoadMore/ButtonLoadMore"
const Catalog = () => {
        const [cars, setCars] = useState([]);
        //eslint-disable-next-line
        const [error, setError] = useState(null);
console.log(cars);
        useEffect(() => {
                const getCars = async () => {
                  try {
                    const data = await fetchForCatalog();
                    setCars(data);
                  } catch (error) {
                    console.log('Something went wrong with fetching cars:', error);
                    setError(error);
                  }
                };
            
                getCars();
              }, []);
        return(
        <div>
        <CarsList cars={cars}/>
        <ButtonLoadMore/>
        </div>
                
        )
        }
        
        export default Catalog;