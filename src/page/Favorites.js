import React, { useEffect, useState } from 'react';
// import AddCar from '../components/AddCar/AddCar'; // Імпортуємо компонент AdCard

const FavoritesPage = () => {
  const [favoriteAds, setFavoriteAds] = useState([]);

  useEffect(() => {
    // Отримайте список улюблених оголошень з localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
   console.log(favorites); // Завантажте оголошення з додаткового джерела (наприклад, API) за їхніми ідентифікаторами та оновіть стан
    // Наразі буде пустий масив favoriteAds
    setFavoriteAds(favorites);
    
  }, []);

  return (
    <div>
    
      {favoriteAds.length === 0 ? (
        <p>No favorite ads yet.</p>
      ) : (
        <div className="favorite-ads-list">
          {favoriteAds.map((ad) => {
                return(<ul></ul>)
            
        })}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
