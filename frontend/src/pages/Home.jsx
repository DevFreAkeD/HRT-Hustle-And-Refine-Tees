import React from 'react';
import Carousel from '../components/main/Carousel';
import CategoryGrid from '../components/main/CategoryGrid';
import ProductDisplay from '../components/main/ProductDisplay';
import TrendingProducts from '../components/main/TrendingProducts';

const Home = () => {
  return (
    <div>
      <Carousel />
      <CategoryGrid />
      <ProductDisplay />
      <TrendingProducts />
    </div>
  );
};

export default Home;