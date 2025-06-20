'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, User, MessageCircle, ChevronRight, ChevronDown, ArrowRight } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Germany',
    continent: 'Europe',
    image: 'https://images.pexels.com/photos/161901/berlin-germany-architecture-building-161901.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Submit your visa application online in minutes.'
  },
  {
    id: 2,
    name: 'South Korea',
    continent: 'Asia',
    image: 'https://images.pexels.com/photos/237211/pexels-photo-237211.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Submit your visa application online in minutes.'
  },
  {
    id: 3,
    name: 'Japan',
    continent: 'Asia',
    image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Submit your visa application online in minutes.'
  },
  {
    id: 4,
    name: 'South Africa',
    continent: 'Africa',
    image: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Submit your visa application online in minutes.'
  },
  {
    id: 5,
    name: 'Egypt',
    continent: 'Africa',
    image: 'https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Submit your visa application online in minutes.'
  },
  {
    id: 6,
    name: 'Brazil',
    continent: 'America',
    image: 'https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Submit your visa application online in minutes.'
  },
  {
    id: 7,
    name: 'Mexico',
    continent: 'America',
    image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Submit your visa application online in minutes.'
  },
  {
    id: 8,
    name: 'Russia',
    continent: 'Europe',
    image: 'https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Submit your visa application online in minutes.'
  },
  {
    id: 9,
    name: 'Indonesia',
    continent: 'Asia',
    image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Submit your visa application online in minutes.'
  }
];

const continents = [
  { name: 'Asia', count: 7, countries: ['Japan', 'South Korea', 'Indonesia', 'Thailand', 'Singapore', 'Malaysia', 'Philippines'] },
  { name: 'Europe', count: 12, countries: ['Germany', 'France', 'Italy', 'Spain', 'Netherlands', 'Russia'] },
  { name: 'America', count: 8, countries: ['Brazil', 'Mexico', 'USA', 'Canada', 'Argentina', 'Chile'] },
  { name: 'Australia', count: 3, countries: ['Australia', 'New Zealand', 'Fiji'] },
  { name: 'Africa', count: 5, countries: ['South Africa', 'Egypt', 'Morocco', 'Kenya', 'Nigeria'] }
];

export default function Home() {
  const [expandedContinent, setExpandedContinent] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleContinent = (continent: string) => {
    setExpandedContinent(expandedContinent === continent ? null : continent);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-pink-100 via-blue-50 to-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 text-sm font-medium text-white bg-pink-400 rounded-full hover:bg-pink-500 transition-colors">
                Exit
              </button>
              <button className="px-6 py-2 text-sm font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors border-2 border-blue-600">
                OPTIONS
              </button>
              <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-orange-400 rounded-full hover:bg-orange-500 transition-colors">
                <User size={16} className="mr-2" />
                Profile
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-100 via-blue-100 to-orange-100">
        <div 
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200/70 via-pink-100/60 to-orange-100/70"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-800">
                Explore global destinations with confidence. Our visa guides and travel tips help you plan better and travel smarter.
              </h1>
              
              <div className="space-y-1 text-base text-gray-700">
                <p>• Visa-free countries</p>
                <p>• COVID-19 travel rules</p>
                <p>• Embassy contact info</p>
                <p>• Travel insurance recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="space-y-1">
                {continents.map((continent) => (
                  <div key={continent.name}>
                    <button
                      onClick={() => toggleContinent(continent.name)}
                      className="w-full flex items-center justify-between p-3 text-left rounded-lg hover:bg-gray-50 transition-colors border-b border-gray-100"
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-gray-700 font-medium text-sm">{continent.name}</span>
                        <div className="flex items-center">
                          <span className="mr-3 text-xs text-gray-500">{continent.count}</span>
                          {expandedContinent === continent.name ? (
                            <ChevronDown size={14} className="text-gray-400" />
                          ) : (
                            <ChevronRight size={14} className="text-gray-400" />
                          )}
                        </div>
                      </div>
                    </button>
                    
                    {expandedContinent === continent.name && (
                      <div className="ml-4 mt-1 space-y-1">
                        {continent.countries.map((country) => (
                          <button
                            key={country}
                            className="block w-full text-left p-2 text-xs text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                          >
                            {country}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Destination Cards Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {destinations.map((destination) => (
                <div
                  key={destination.id}
                  className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 relative"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  
                  <div className="p-4 relative">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {destination.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                      {destination.description}
                    </p>
                    
                    {/* Button that slides in from right */}
                    <div className="absolute bottom-4 right-4 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="w-12 h-12 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center shadow-lg">
                        <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Visa Application</h3>
                  <p className="text-xs text-gray-600">Visa Application</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 mb-4">
                Travel helps companies manage payments easily.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-xs">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-xs">Travel</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-xs">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-xs">Apply</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">Join Our Newsletter</h4>
              <div className="flex gap-2 mb-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium text-sm">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-600">
                * Will send you weekly updates for your better lux packages.
              </p>
            </div>
          </div>
          
          <div className="border-t pt-8 mt-8">
            <p className="text-center text-gray-600 text-xs">
              Copyright © Xpro 2025. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50">
        <MessageCircle size={24} />
      </button>
    </div>
  );
}