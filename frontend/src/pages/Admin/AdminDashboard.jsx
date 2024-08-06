import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/admin/login'; // Redirect to login page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white py-4 px-8">
        <div className="container mx-auto flex justify-between items-center">
            <div className="flex flex-col items-center">
                <span className="text-xl font-bold">H    R    T</span>
                <p className="text-[8px]">Hustle & Refine Tees</p>
            </div>
            <span className="text-xl font-semibold">Admin Dashboard</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </header>
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/admin/products" className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">Manage Products</h2>
            <p>View, add, edit, or delete products.</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;