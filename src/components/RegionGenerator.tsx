import React, { useState } from 'react';
import { Shuffle } from 'lucide-react';
import CityCard from './CityCard';
import type { City } from '../data/cities';

interface RegionGeneratorProps {
  cities: City[];
  region: string;
}

export default function RegionGenerator({ cities, region }: RegionGeneratorProps) {
  const [currentCity, setCurrentCity] = useState<City | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateRandomCity = () => {
    setIsLoading(true);
    const randomIndex = Math.floor(Math.random() * cities.length);
    
    setTimeout(() => {
      setCurrentCity(cities[randomIndex]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Random {region} Trip Generator</h1>
        <p className="text-xl text-gray-600">Discover your next {region} adventure!</p>
      </div>

      <div className="flex justify-center mb-8">
        <button
          onClick={generateRandomCity}
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Shuffle className="h-5 w-5" />
          <span>{isLoading ? 'Finding destination...' : `Generate Random ${region} Trip`}</span>
        </button>
      </div>

      {currentCity && <CityCard city={currentCity} />}
    </div>
  );
}