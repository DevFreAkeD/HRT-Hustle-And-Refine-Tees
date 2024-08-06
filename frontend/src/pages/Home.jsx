import React from 'react';
import Carousel from '../components/main/Carousel';
import CategoryGrid from '../components/main/CategoryGrid';
import ProductDisplay from '../components/main/ProductDisplay';

const Home = () => {
  return (
    <div>
      <Carousel />
      <CategoryGrid />
      <ProductDisplay />
    </div>
  );
};

export default Home;