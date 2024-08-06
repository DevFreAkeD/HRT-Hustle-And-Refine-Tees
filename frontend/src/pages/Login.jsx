import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '', // Only used during registration
    });
    const [emailVerified, setEmailVerified] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccessMessage('');

        if (!isLogin) {
            if (formData.password !== formData.confirmPassword) {
                setError('Passwords do not match');
                setLoading(false);
                return;
            }
            if (!emailVerified) {
                setError('Email not verified');
                setLoading(false);
                return;
            }
        }

        try {
            const endpoint = isLogin ? 'http://localhost:8080/api/users/login' : 'http://localhost:8080/api/users/register';
            const response = await axios.post(endpoint, formData);

            if (isLogin) {
                // Handle login success (e.g., store JWT token)
                localStorage.setItem('token', response.data.token); // Example of storing JWT token
                setSuccessMessage('Logged in successfully!');
                navigate('/'); // Redirect to homepage after successful login
            } else {
                setSuccessMessage('Registered successfully! Please log in.');
            }
        } catch (error) {
            setError(error.response?.data?.message || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    {isLogin ? 'Login' : 'Register'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                    required
                                />
                            </label>
                        </div>
                    )}
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                            required
                        />
                    </label>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                            required
                        />
                    </label>
                    {!isLogin && (
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Confirm Password:
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                    required
                                />
                            </label>
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-gray-600 text-white font-semibold rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        disabled={loading}
                    >
                        {loading ? 'Processing...' : (isLogin ? 'Login' : 'Register')}
                    </button>
                    {error && <p className="mt-2 text-red-600 text-center">{error}</p>}
                    {successMessage && <p className="mt-2 text-green-600 text-center">{successMessage}</p>}
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    {isLogin
                        ? "Don't have an account? "
                        : 'Already have an account? '}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-gray-600 hover:text-gray-800"
                    >
                        {isLogin ? 'Register' : 'Login'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;