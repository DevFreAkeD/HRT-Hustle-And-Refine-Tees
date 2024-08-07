import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa'; // Import Font Awesome heart icon

// Categories with images
const categories = [
  { id: 'trending-collection', name: 'Trending Collection', image: 'https://via.placeholder.com/300x200' },
  { id: 'best-sellers', name: 'Best Sellers', image: 'https://via.placeholder.com/300x200' },
  { id: 'oversize-t-shirts', name: 'Oversize T-Shirts', image: 'https://via.placeholder.com/300x200' },
  { id: 't-shirts', name: 'T-Shirts', image: 'https://via.placeholder.com/300x200' },
];

// All products with categories
const allProducts = [
  // Trending Collection
  ...Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Trending Product ${i + 1}`,
    image: 'https://via.placeholder.com/300x200',
    price: `$${(20 + i * 5).toFixed(2)}`,
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'trending-collection',
  })),
  // Best Sellers
  ...Array.from({ length: 12 }, (_, i) => ({
    id: i + 13,
    name: `Best Seller ${i + 1}`,
    image: 'https://via.placeholder.com/300x200',
    price: `$${(25 + i * 5).toFixed(2)}`,
    sizes: ['M', 'L', 'XL'],
    category: 'best-sellers',
  })),
  // Oversize T-Shirts
  ...Array.from({ length: 12 }, (_, i) => ({
    id: i + 25,
    name: `Oversize T-Shirt ${i + 1}`,
    image: 'https://via.placeholder.com/300x200',
    price: `$${(30 + i * 5).toFixed(2)}`,
    sizes: ['S', 'M', 'L'],
    category: 'oversize-t-shirts',
  })),
  // T-Shirts
  ...Array.from({ length: 12 }, (_, i) => ({
    id: i + 37,
    name: `T-Shirt ${i + 1}`,
    image: 'https://via.placeholder.com/300x200',
    price: `$${(35 + i * 5).toFixed(2)}`,
    sizes: ['L', 'XL'],
    category: 't-shirts',
  })),
];

const Products = () => {
  const { categoryId } = useParams();
  const [showCategories, setShowCategories] = useState(true);

  useEffect(() => {
    if (categoryId) {
      setShowCategories(false);
    } else {
      setShowCategories(true);
    }
  }, [categoryId]);

  // Filter products based on the selected category
  const products = categoryId
    ? allProducts.filter(p => p.category === categoryId)
    : allProducts;

  // Breadcrumb component
  const breadcrumb = () => {
    if (categoryId) {
      const category = categories.find(cat => cat.id === categoryId);
      return (
        <nav className="text-sm text-gray-800 mb-4">
          <Link to="/products" className="hover:underline">All Products</Link> {' > '}
          <span>{category ? category.name : categoryId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
        </nav>
      );
    }
    return <nav className="text-sm text-gray-800 mb-4"><span>All Products</span></nav>;
  };

  return (
    <div className={`px-6 py-8 ${categoryId ? 'bg-gray-100' : 'bg-gray-100'} min-h-screen`}>
      {breadcrumb()}
      {showCategories && !categoryId && (
        <>
          <h1 className="text-xl font-bold text-gray-800 mb-6">Categories</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {categories.map(category => (
              <Link
                to={`/products/${category.id}`}
                key={category.id}
                onClick={() => setShowCategories(false)} // Hide categories on click
                className="relative block overflow-hidden bg-gray-900 rounded-lg"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center rounded-lg">
                  <span className="text-white text-lg font-semibold">{category.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
      <h1 className="text-xl font-bold text-gray-800 mb-6">
        {categoryId ? categories.find(cat => cat.id === categoryId)?.name || categoryId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'All Products'}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map(product => (
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
                    {product.sizes.map(size => (
                      <span key={size} className="px-2 py-1 border border-gray-300 rounded-md text-sm">{size}</span>
                    ))}
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Products;