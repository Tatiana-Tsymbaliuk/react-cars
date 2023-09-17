import React, { useEffect, useState } from 'react';
import CarsList from 'components/CarsList';
import axios from 'axios';
const FavoritesPage = () => {
  const [favoriteAds, setFavoriteAds] = useState([]);

  useEffect(() => {
    const fetchFavoriteAds = async () => {
      try {
        const response = await axios.get(
          'https://64a05432ed3c41bdd7a73763.mockapi.io/cars',
          {
            params: { favorite: true },
          }
        );
        setFavoriteAds(response.data);
      } catch (error) {
        console.error('Помилка при завантаженні улюблених оголошень', error);
      }
    };

    fetchFavoriteAds();
  }, []);

  return (
    <div>
      {favoriteAds.length !== 0 ? <CarsList cars={favoriteAds} /> : <> </>}
    </div>
  );
};

export default FavoritesPage;
