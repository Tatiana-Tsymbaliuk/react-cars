import React, { useState, useEffect } from 'react';
import styles from './AddCar.module.css';
import { FaHeart } from 'react-icons/fa';

const AddCar = ({ car }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Перевірка стану улюблених оголошень у localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(car.id));
  }, [car.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const updatedFavorites = isFavorite
      ? favorites.filter((favorite) => favorite !== car.id)
      : [...favorites, car.id];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`${styles.favoriteButton} ${isFavorite ? styles.favorite : ''}`}
    >
      <FaHeart className={styles.iconHeart} />
    </button>
  );
};

export default AddCar;
