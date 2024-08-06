// src/components/CategoryGrid.jsx

import React from 'react';

const categories = [
  { name: 'Regular T-Shirt', image: 'https://via.placeholder.com/300x200' },
  { name: 'Oversize T-Shirt', image: 'https://via.placeholder.com/300x200' },
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 py-6 px-20">
      {categories.map((category) => (
        <div key={category.name} className="category-item relative">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-60 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <span className="text-white text-xl font-bold">{category.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;