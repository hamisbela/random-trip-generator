import React from 'react';
import { Plane, Hotel, Clock, Coins, Globe2, Utensils } from 'lucide-react';
import type { City } from '../data/cities';

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  const getBookingUrl = (cityName: string) => 
    `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(cityName)}`;
  
  const getSkyscannerUrl = (cityName: string) =>
    `https://www.skyscanner.com/transport/flights/anywhere/${encodeURIComponent(cityName)}`;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={city.imageUrl}
        alt={city.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {city.name}, {city.country}
          </h2>
          <p className="text-gray-600">{city.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-2">
            <Clock className="h-5 w-5 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold">Best Time to Visit</h3>
              <p className="text-gray-600">{city.bestTimeToVisit}</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Coins className="h-5 w-5 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold">Currency</h3>
              <p className="text-gray-600">{city.currency}</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Globe2 className="h-5 w-5 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold">Language</h3>
              <p className="text-gray-600">{city.language}</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Utensils className="h-5 w-5 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold">Cuisine</h3>
              <p className="text-gray-600">{city.cuisine}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Top Attractions</h3>
          <ul className="list-disc list-inside text-gray-600">
            {city.attractions.map((attraction, index) => (
              <li key={index}>{attraction}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={getSkyscannerUrl(city.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center space-x-2"
          >
            <Plane className="h-5 w-5" />
            <span>Check Flights</span>
          </a>
          <a
            href={getBookingUrl(city.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 flex items-center justify-center space-x-2"
          >
            <Hotel className="h-5 w-5" />
            <span>Find Hotels</span>
          </a>
        </div>
      </div>
    </div>
  );
}