import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Suspense } from 'react';
import { lazy } from 'react';

const Home = lazy(() => import('../page/Home'));
const Catalog = lazy(() => import('../page/Catalog'));
const Favorites = lazy(() => import('../page/Favorites'));

export const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};
