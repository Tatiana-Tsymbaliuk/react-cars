import React, { useEffect, useState } from 'react';
import CarsList from 'components/CarsList';
import axios from 'axios';
const FavoritesPage = () => {
  const [favoriteAds, setFavoriteAds] = useState([]);

  useEffect(() => {
        // Завантажте оголошення з додаткового джерела (наприклад, API) за параметром "favorites" зі значенням true
        const fetchFavoriteAds = async () => {
          try {
            const response = await axios.get('https://64a05432ed3c41bdd7a73763.mockapi.io/cars', {
              params: { favorite: true },
            });
            setFavoriteAds(response.data);
          } catch (error) {
            console.error('Помилка при завантаженні улюблених оголошень', error);
          }
        };
    
        fetchFavoriteAds();
      }, []);
    

  return (
    <div>
    
      {favoriteAds.length === 0 ? (
        <p>No favorite ads yet.</p>
      ) : (<CarsList cars={favoriteAds}/>
        // <div>
        //   {favoriteAds.map((ad) => {
        //         return(<ul key={ad.id}>
        //                 <li className="ImageGalleryItem"> 
        //               <img 
        //                 src={ad.img} 
        //                 alt={ad.model} 
        //             //     onClick={() => onImageClick(image.largeImageURL)}
        //                 className='ImageGalleryItem-image'/>
                        
        //                  <div>{ad.model}{ad.year}{ad.rentalPrice}</div>
        //                  {/* <div><Button/></div> */}
        //               </li> </ul>)
            
        // })}
        // </div>
      )}
    </div>
  );
};

export default FavoritesPage;
