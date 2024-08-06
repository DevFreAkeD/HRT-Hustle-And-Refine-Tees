// src/components/ProductDetails.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL

  // Fetch or find the product details by ID here (for demonstration, using a static object)
  const product = {
    name: `Product ${id}`,
    images: [
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/600x400/ff0000/ffffff', // Example additional images
      'https://via.placeholder.com/600x400/00ff00/ffffff',
    ],
    description: 'Detailed description of the product.',
    colors: ['Red', 'Blue', 'Green'],
    sizes: ['S', 'M', 'L', 'XL'],
    price: '$29.99',
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="container mx-auto py-8 px-12">
      <div className="flex">
        {/* Main Image Display */}
        <div className="flex-shrink-0 w-1/2">
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full h-auto"
          />
          {/* Thumbnail Navigation */}
          <div className="flex mt-4 space-x-2">
            {product.images.map((image) => (
              <img
                key={image}
                src={image}
                alt={product.name}
                className="w-16 h-16 cursor-pointer object-cover border rounded"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
        {/* Product Details */}
        <div className="w-1/2 ml-20">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="mt-2">{product.description}</p>

          <div className="mt-4">
            <h2 className="font-semibold">Color:</h2>
            <div className="flex space-x-2 mt-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className="p-2 border rounded bg-white text-gray-800"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h2 className="font-semibold">Size:</h2>
            <div className="flex space-x-2 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="p-2 border rounded bg-white text-gray-800"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 text-lg font-bold">
            Price: {product.price}
          </div>

          <div className="mt-4">
            <button className="text-gray-900 hover:text-pink-500">
              ❤️ Add to Wishlist
            </button>
          </div>
          
          <div className="mt-4 flex space-x-4">
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
              Add to Cart
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
              Buy Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;