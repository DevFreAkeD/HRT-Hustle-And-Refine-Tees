import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa'; // Import Font Awesome heart icon

const trendingProducts = [
  { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/300x200', price: '$19.99', sizes: ['S', 'M', 'L'] },
  { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/300x200', price: '$29.99', sizes: ['M', 'L', 'XL'] },
  { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/300x200', price: '$24.99', sizes: ['S', 'L'] },
  { id: 4, name: 'Product 4', image: 'https://via.placeholder.com/300x200', price: '$34.99', sizes: ['M', 'XL'] },
  { id: 5, name: 'Product 5', image: 'https://via.placeholder.com/300x200', price: '$14.99', sizes: ['S', 'M'] },
];

const TrendingProducts = () => {
  return (
    <div className="py-6 px-9 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Trending Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {trendingProducts.slice(0, 4).map((product) => (
          <div key={product.id} className="relative border border-gray-300 rounded-lg overflow-hidden bg-white">
            <Link to={`/product/${product.id}`} className="block">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[25rem] object-cover"
              />
            </Link>
            <div className="p-4">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold">{product.price}</span>
                    <button className="text-red-600 text-xl">
                      <FaHeart />
                    </button>
                  </div>
                </div>
                <div>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;