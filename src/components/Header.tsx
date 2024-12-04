import React from 'react';
import { Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">RandomTripGenerator</span>
            </Link>
          </div>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap gap-4 md:gap-6">
              <li><Link to="/usa" className="text-gray-700 hover:text-blue-600">USA</Link></li>
              <li><Link to="/asia" className="text-gray-700 hover:text-blue-600">Asia</Link></li>
              <li><Link to="/europe" className="text-gray-700 hover:text-blue-600">Europe</Link></li>
              <li><Link to="/australia" className="text-gray-700 hover:text-blue-600">Australia</Link></li>
              <li><Link to="/africa" className="text-gray-700 hover:text-blue-600">Africa</Link></li>
              <li><Link to="/south-america" className="text-gray-700 hover:text-blue-600">South America</Link></li>
              <li><Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link></li>
              <li><Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}