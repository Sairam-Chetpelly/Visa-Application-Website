'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-300 flex">
      {/* Left Side - Illustration */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 relative">
        {/* Logo */}
        <div className="absolute top-8 left-8">
          <div className="bg-blue-600 text-white px-6 py-3 rounded-lg border-2 border-white shadow-lg">
            <div className="text-lg font-bold">OPTIONS</div>
            <div className="text-xs">Travel Services</div>
          </div>
        </div>

        {/* Illustration Area */}
        <div className="flex flex-col items-center justify-center space-y-8 max-w-md">
          {/* Security Shield Illustration */}
          <div className="relative">
            {/* Background circles */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-300 rounded-full opacity-30"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-300 rounded-full opacity-40"></div>
            
            {/* Main illustration container */}
            <div className="relative bg-white rounded-2xl p-8 shadow-xl">
              {/* Shield */}
              <div className="w-32 h-40 bg-gradient-to-b from-purple-500 to-purple-700 rounded-t-full rounded-b-lg mx-auto relative">
                {/* Lock icon */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 border-4 border-white rounded-full"></div>
                  <div className="w-12 h-8 bg-white rounded-b-lg mt-1"></div>
                </div>
              </div>
              
              {/* Business person */}
              <div className="absolute -left-4 top-4">
                <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-orange-300 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Check mark */}
              <div className="absolute -right-2 -top-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-2 border-l-2 border-b-2 border-white transform rotate-45"></div>
              </div>
              
              {/* User card */}
              <div className="absolute -right-8 top-8 w-16 h-12 bg-white rounded-lg shadow-lg border-2 border-gray-200">
                <div className="w-6 h-6 bg-purple-400 rounded-full mx-auto mt-1"></div>
                <div className="w-8 h-1 bg-gray-300 rounded mx-auto mt-1"></div>
                <div className="w-6 h-1 bg-gray-300 rounded mx-auto mt-1"></div>
              </div>
            </div>
            
            {/* Decorative stars */}
            <div className="absolute -top-8 left-8 text-pink-400 text-2xl">✦</div>
            <div className="absolute -bottom-6 right-12 text-purple-400 text-lg">✦</div>
            <div className="absolute top-12 -right-8 text-blue-400 text-xl">✦</div>
          </div>

          {/* Text Content */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Professional & Trustworthy</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              "Trusted Visa Assistance for Global<br />Travel Needs"
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-96 bg-white/90 backdrop-blur-sm p-8 flex flex-col justify-center">
        {/* Tab Buttons */}
        <div className="flex mb-8 bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-3 px-6 rounded-full text-sm font-medium transition-all ${
              activeTab === 'login'
                ? 'bg-pink-100 text-pink-600 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Login
          </button>
          <Link href="/register" className="flex-1">
            <button
              className="w-full py-3 px-6 rounded-full text-sm font-medium text-gray-500 hover:text-gray-700 transition-all"
            >
              Sign Up
            </button>
          </Link>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Back to Home Link */}
        <div className="mt-8 text-center">
          <Link 
            href="/" 
            className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}