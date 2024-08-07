import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa'; // Import Font Awesome heart icon

const products = {
  bestSellers: [
    { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/300x200', price: '$19.99', sizes: ['S', 'M', 'L'] },
    { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/300x200', price: '$29.99', sizes: ['M', 'L', 'XL'] },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/300x200', price: '$24.99', sizes: ['S', 'L'] },
    { id: 4, name: 'Product 4', image: 'https://via.placeholder.com/300x200', price: '$34.99', sizes: ['M', 'XL'] },
    { id: 5, name: 'Product 5', image: 'https://via.placeholder.com/300x200', price: '$14.99', sizes: ['S', 'M'] },
  ],
  newArrivals: [
    { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/300x200', price: '$22.99', sizes: ['S', 'M', 'XL'] },
    { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/300x200', price: '$27.99', sizes: ['M', 'L'] },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/300x200', price: '$19.99', sizes: ['S', 'XL'] },
    { id: 4, name: 'Product 4', image: 'https://via.placeholder.com/300x200', price: '$30.99', sizes: ['M', 'L', 'XL'] },
    { id: 5, name: 'Product 5', image: 'https://via.placeholder.com/300x200', price: '$18.99', sizes: ['S', 'M'] },
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
        {products[selectedCategory].slice(0, 4).map((product) => (
          <div key={product.id} className="relative border border-gray-300 rounded-lg overflow-hidden bg-white">
            <Link to={`/product/${product.id}`} className="block">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[20rem] object-cover"
              />
            </Link>
            <div className="p-4">
                <div>
                  <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold">{product.price}</span>
                    <button className="text-red-600 text-xl">
                      <FaHeart />
                    </button>
                  </div>
                </div>
              <div className="mb-2">
                <span className="text-sm font-semibold">Sizes:</span>
                <div className="flex space-x-2 mt-1">
                  {product.sizes.map((size) => (
                    <span key={size} className="px-2 py-1 border border-gray-300 rounded-md text-sm">{size}</span>
                  ))}
                </div>
              </div>
              <button className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;