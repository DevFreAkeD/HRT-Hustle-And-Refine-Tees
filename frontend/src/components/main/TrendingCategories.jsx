import React from 'react';

const trendingCategories = [
  { name: 'Category 1', image: 'https://via.placeholder.com/600x400' },
  { name: 'Category 2', image: 'https://via.placeholder.com/300x200' },
  { name: 'Category 3', image: 'https://via.placeholder.com/300x200' },
  { name: 'Category 4', image: 'https://via.placeholder.com/300x200' },
  { name: 'Category 5', image: 'https://via.placeholder.com/300x200' },
];

const TrendingCategories = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Trending Categories</h2>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-2">
          <img
            src={trendingCategories[0].image}
            alt={trendingCategories[0].name}
            className="w-full h-[30rem] object-cover rounded-lg"
          />
        </div>
        <div className="col-span-3 grid grid-cols-2 grid-rows-2 gap-4">
          {trendingCategories.slice(1).map((category) => (
            <div key={category.name} className="relative">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-[14.5rem] object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                <span className="text-white text-lg font-bold">{category.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCategories;