// import React, { useState, useEffect } from 'react';
// import styles from './AddCar.module.css';
// import { FaHeart } from 'react-icons/fa';

// const AddCar = ({ car }) => {
//   const [isFavorite, setIsFavorite] = useState(false);

//   useEffect(() => {
//     // Перевірка стану улюблених оголошень у localStorage
//     const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
//     setIsFavorite(favorites.includes(car.favorite));
//   }, [car.favorite]);

//   const toggleFavorite = () => {
//     const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
//     const updatedFavorites = isFavorite
//       ? favorites.filter((favorite) => favorite !== car.favorite)
//       : [...favorites, car.favorite];
//     localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
//     setIsFavorite(!isFavorite);
//   };

//   return (
//     <button
//       onClick={toggleFavorite}
//       className={`${styles.favoriteButton} ${isFavorite ? styles.favorite : ''}`}
//     >
//       <FaHeart className={styles.iconHeart} />
//     </button>
//   );
// };

// export default AddCar;

import React, { useState, useEffect } from 'react';
import styles from './AddCar.module.css';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';

const AddCar = ( {car} ) => {
  const [isFavorite, setIsFavorite] = useState(false);
console.log(car.favorite);
  useEffect(() => {
    // Функція для оновлення значення favorite на сервері
    const updateFavorite = async () => {
      try {
        // Відправте PUT запит на сервер для оновлення значення favorite
        const response = await axios.put(
          `https://64a05432ed3c41bdd7a73763.mockapi.io/cars/${car.id}`,
          { favorite: true}
        );
       console.log(response);

        // Перевірте, чи успішно оновлено на сервері і оновіть локальний стан
        if (response.status === 200) {
          setIsFavorite(!isFavorite);
        }
      } catch (error) {
        console.error('Помилка при оновленні значення favorite', error);
      }
    };

    // Викликайте функцію для оновлення favorite при зміні стану isFavorite
    if (isFavorite !== car.favorite) {
      updateFavorite();
    }
  }, [isFavorite, car.id, car.favorite]);

  return (
    <button
      onClick={() => setIsFavorite(!isFavorite)}
      className={`${styles.favoriteButton} ${isFavorite ? styles.favorite : ''}`}
    >
      <FaHeart className={styles.iconHeart} />
    </button>
  );
};

export default AddCar;

