import React, { useState } from 'react';
import styles from './AddCar.module.css';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';

const AddCar = ({ car }) => {
  const [isFavorite, setIsFavorite] = useState(car.favorite);

  const handleFavoriteClick = async () => {
    try {
      const response = await axios.put(
        `https://64a05432ed3c41bdd7a73763.mockapi.io/cars/${car.id}`,
        { favorite: !isFavorite }
      );

      if (response.status === 200) {
        setIsFavorite(!isFavorite);
      }
    } catch (error) {
      console.error('Помилка при оновленні значення favorite', error);
    }
  };

  return (
    <button
      onClick={handleFavoriteClick}
      className={`${styles.favoriteButton} ${
        isFavorite ? styles.favorite : ''
      }`}
    >
      <FaHeart className={styles.iconHeart} />
    </button>
  );
};

export default AddCar;
