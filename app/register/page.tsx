'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export default function Register() {
  const [activeTab, setActiveTab] = useState('signup');
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Registration form submitted:', formData);
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
          {/* Success/Achievement Illustration */}
          <div className="relative">
            {/* Background elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink-300 rounded-full opacity-30"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-300 rounded-full opacity-20"></div>
            
            {/* Main illustration container */}
            <div className="relative">
              {/* Clipboard with checklist */}
              <div className="bg-white rounded-2xl p-6 shadow-xl transform -rotate-12">
                <div className="w-32 h-40 bg-gray-50 rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-sm flex items-center justify-center">
                        <div className="w-1.5 h-1 border-l border-b border-white transform rotate-45"></div>
                      </div>
                      <div className="w-16 h-1 bg-gray-300 rounded"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-sm flex items-center justify-center">
                        <div className="w-1.5 h-1 border-l border-b border-white transform rotate-45"></div>
                      </div>
                      <div className="w-12 h-1 bg-gray-300 rounded"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-sm flex items-center justify-center">
                        <div className="w-1.5 h-1 border-l border-b border-white transform rotate-45"></div>
                      </div>
                      <div className="w-14 h-1 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
                {/* Clipboard clip */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-800 rounded-t-lg"></div>
              </div>
              
              {/* Success badge/medal */}
              <div className="absolute -right-8 -top-4 transform rotate-12">
                <div className="relative">
                  {/* Medal ribbon */}
                  <div className="w-20 h-24 bg-gradient-to-b from-orange-400 to-red-500 rounded-full relative">
                    {/* Ribbon tails */}
                    <div className="absolute -bottom-2 left-2 w-4 h-8 bg-orange-500 transform rotate-12 rounded-b-full"></div>
                    <div className="absolute -bottom-2 right-2 w-4 h-8 bg-red-500 transform -rotate-12 rounded-b-full"></div>
                    
                    {/* Medal center */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-400 rounded-full border-4 border-yellow-300 flex items-center justify-center">
                      <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Success person */}
              <div className="absolute -left-12 top-8">
                <div className="w-16 h-20 relative">
                  {/* Person body */}
                  <div className="w-12 h-16 bg-gray-700 rounded-t-full mx-auto"></div>
                  {/* Person head */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-300 rounded-full"></div>
                  {/* Thumbs up */}
                  <div className="absolute top-4 -right-2 w-3 h-4 bg-orange-300 rounded-full transform rotate-45"></div>
                </div>
              </div>
              
              {/* Check mark */}
              <div className="absolute -right-2 top-12 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-5 h-3 border-l-3 border-b-3 border-white transform rotate-45"></div>
              </div>
            </div>
            
            {/* Decorative stars */}
            <div className="absolute -top-4 left-4 text-pink-400 text-xl">★</div>
            <div className="absolute -bottom-2 right-8 text-purple-400 text-lg">★</div>
            <div className="absolute top-8 -right-12 text-orange-400 text-2xl">★</div>
            <div className="absolute -left-8 bottom-4 text-blue-400 text-sm">★</div>
            <div className="absolute top-2 left-12 text-pink-300 text-xs">★</div>
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

      {/* Right Side - Registration Form */}
      <div className="w-96 bg-white/90 backdrop-blur-sm p-8 flex flex-col justify-center">
        {/* Tab Buttons */}
        <div className="flex mb-8 bg-gray-100 rounded-full p-1">
          <Link href="/login" className="flex-1">
            <button
              className="w-full py-3 px-6 rounded-full text-sm font-medium text-gray-500 hover:text-gray-700 transition-all"
            >
              Login
            </button>
          </Link>
          <button
            onClick={() => setActiveTab('signup')}
            className={`flex-1 py-3 px-6 rounded-full text-sm font-medium transition-all ${
              activeTab === 'signup'
                ? 'bg-pink-100 text-pink-600 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              required
            />
          </div>

          <div>
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              required
            />
          </div>

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
              placeholder="Create Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re Enter Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors shadow-lg mt-6"
          >
            Sign Up
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