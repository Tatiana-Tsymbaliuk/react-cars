import { useState, useEffect } from 'react';
import { fetchForCatalog } from '../api/api';
import CarsList from '../components/CarsList/CarsList';
import ButtonLoadMore from '../components/ButtonLoadMore/ButtonLoadMore';

const Catalog = () => {
  const [cars, setCars] = useState([]);
  //eslint-disable-next-line
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(0);
  console.log(cars);

  useEffect(() => {
    const getCars = async () => {
      try {
        const data = await fetchForCatalog(limit, page);
        setCars(cars => [...cars, ...data]);
        setLimit(8);
      } catch (error) {
        console.log('Something went wrong with fetching cars:', error);
        setError(error);
      }
    };

    getCars();
  }, [page, limit]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const needToShowLoadMore = cars.length !== 0;
  return (
    <div>
      <CarsList cars={cars} />
      {needToShowLoadMore ? (
        <ButtonLoadMore onLoadMore={handleLoadMore} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Catalog;
