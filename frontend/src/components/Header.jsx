// src/components/Header.js

import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-10">
        <div className="container flex justify-between items-center">
            {/* Brand Name */}
            <div className="flex flex-col items-center">
                <span className="text-xl font-bold">H    R    T</span>
                <p className="text-[8px]">Hustle & Refine Tees</p>
            </div>

            {/* Search Bar */}
            <div className="flex justify-center items-center relative">
                <input
                    type="text"
                    placeholder="Search..."
                    className="px-4 py-2 w-[25rem] bg-gray-700 text-white rounded-md focus:outline-none focus:bg-gray-900"
                />
                <button className="absolute right-0 top-0 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        className="h-6 w-6"
                        fill="gray"
                    >
                        <path d="M 21 3 C 11.622998 3 4 10.623005 4 20 C 4 29.376995 11.622998 37 21 37 C 24.712383 37 28.139151 35.791079 30.9375 33.765625 L 44.085938 46.914062 L 46.914062 44.085938 L 33.886719 31.058594 C 36.443536 28.083 38 24.223631 38 20 C 38 10.623005 30.377002 3 21 3 z M 21 5 C 29.296122 5 36 11.703883 36 20 C 36 28.296117 29.296122 35 21 35 C 12.703878 35 6 28.296117 6 20 C 6 11.703883 12.703878 5 21 5 z"></path>
                    </svg>
                </button>
            </div>

            {/* Profile and Cart Icons */}
            <div className="flex space-x-4">
                {/* Cart Icon (Replace with your icon component or image) */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 483.1 483.1"
                    className="h-6 w-6 text-white hover:text-gray-300 cursor-pointer"
                    fill="currentColor"
                >
                    <path d="M434.55,418.7l-27.8-313.3c-0.5-6.2-5.7-10.9-12-10.9h-58.6c-0.1-52.1-42.5-94.5-94.6-94.5s-94.5,42.4-94.6,94.5h-58.6c-6.2,0-11.4,4.7-12,10.9l-27.8,313.3c0,0.4,0,0.7,0,1.1c0,34.9,32.1,63.3,71.5,63.3h243c39.4,0,71.5-28.4,71.5-63.3C434.55,419.4,434.55,419.1,434.55,418.7z M241.55,24c38.9,0,70.5,31.6,70.6,70.5h-141.2C171.05,55.6,202.65,24,241.55,24zM363.05,459h-243c-26,0-47.2-17.3-47.5-38.8l26.8-301.7h47.6v42.1c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h141.2v42.1c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h47.6l26.8,301.8C410.25,441.7,389.05,459,363.05,459z"/>
                </svg>
            </div>
        </div>

        {/* Navigation Links */}
        <nav className="container mx-auto mt-4">
            <ul className="flex items-center justify-center space-x-16 uppercase">
                <li className="relative group">
                    <span className="hover:text-gray-300 justify-center cursor-pointer">All Products</span>
                    <ul className="absolute tems-center justify-center w-36 top-full left-0 bg-gray-800 text-white rounded-md p-2 hidden group-hover:block">
                    <li><a href="#" className="block py-1 hover:text-gray-300">All</a></li>
                    <li><a href="#" className="block py-1 hover:text-gray-300">New Arrivals</a></li>
                    <li><a href="#" className="block py-1 hover:text-gray-300">Best Sellers</a></li>
                    <li><a href="#" className="block py-1 hover:text-gray-300">T Shirts</a></li>
                    <li><a href="#" className="block py-1 hover:text-gray-300">Oversize T Shirts</a></li>
                    </ul>
                </li>
                <li className="relative group">
                    <span className="hover:text-gray-300 cursor-pointer">Top Wear</span>
                    <ul className="absolute w-36 top-full left-0 bg-gray-800 text-white rounded-md p-2 hidden group-hover:block">
                    <li><a href="#" className="block py-1 hover:text-gray-300">All</a></li>
                    <li><a href="#" className="block py-1 hover:text-gray-300">New Arrivals</a></li>
                    <li><a href="#" className="block py-1 hover:text-gray-300">Best Sellers</a></li>
                    <li><a href="#" className="block py-1 hover:text-gray-300">T Shirts</a></li>
                    <li><a href="#" className="block py-1 hover:text-gray-300">Oversize T Shirts</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;