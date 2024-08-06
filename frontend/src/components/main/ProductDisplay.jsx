import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = {
  bestSellers: [
    { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/300x200' },
    { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/300x200' },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/300x200' },
    { id: 4, name: 'Product 4', image: 'https://via.placeholder.com/300x200' },
    { id: 5, name: 'Product 5', image: 'https://via.placeholder.com/300x200' },
  ],
  newArrivals: [
    { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/300x200' },
    { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/300x200' },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/300x200' },
    { id: 4, name: 'Product 4', image: 'https://via.placeholder.com/300x200' },
    { id: 5, name: 'Product 5', image: 'https://via.placeholder.com/300x200' },
  ],
};

const ProductDisplay = () => {
  const [selectedCategory, setSelectedCategory] = useState('bestSellers');

  return (
    <div className="px-10 py-8 bg-slate-700">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-white">Popular Products</h1>
        <div>
          <button
            onClick={() => setSelectedCategory('bestSellers')}
            className={`px-4 py-2 mx-2 ${
              selectedCategory === 'bestSellers' ? 'bg-gray-800 text-white' : 'bg-gray-300'
            } rounded-md`}
          >
            Best Sellers
          </button>
          <button
            onClick={() => setSelectedCategory('newArrivals')}
            className={`px-4 py-2 mx-2 ${
              selectedCategory === 'newArrivals' ? 'bg-gray-800 text-white' : 'bg-gray-300'
            } rounded-md`}
          >
            New Arrivals
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 my-4">
        {products[selectedCategory].map((product) => (
          <Link
            to={`/product/${product.id}`} // Redirects to product details page with product ID
            key={product.id}
            className="relative block"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[25rem] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
              <span className="text-white text-xl font-bold">{product.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;