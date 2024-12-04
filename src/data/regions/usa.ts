import type { City } from '../cities';

export const usaCities: City[] = [
  {
    id: 101,
    name: "New York City",
    country: "USA",
    description: "The city that never sleeps pulses with endless energy. From Broadway shows to Central Park's serenity, NYC offers an unparalleled urban adventure.",
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80",
    bestTimeToVisit: "April to June or September to November",
    attractions: ["Times Square", "Central Park", "Empire State Building", "Broadway", "Statue of Liberty"],
    cuisine: "Diverse food scene featuring pizza, bagels, and international cuisine",
    currency: "US Dollar (USD)",
    language: "English",
    timezone: "Eastern Time (ET)"
  },
  {
    id: 102,
    name: "San Francisco",
    country: "USA",
    description: "A city of iconic landmarks, diverse neighborhoods, and innovative spirit. Experience the Golden Gate Bridge, historic cable cars, and world-class cuisine.",
    imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80",
    bestTimeToVisit: "September to November",
    attractions: ["Golden Gate Bridge", "Alcatraz Island", "Fisherman's Wharf", "Chinatown", "Pier 39"],
    cuisine: "Seafood, sourdough bread, and fusion cuisine",
    currency: "US Dollar (USD)",
    language: "English",
    timezone: "Pacific Time (PT)"
  },
  {
    id: 103,
    name: "Las Vegas",
    country: "USA",
    description: "The Entertainment Capital of the World dazzles with its neon lights, world-class shows, and endless entertainment options.",
    imageUrl: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?auto=format&fit=crop&q=80",
    bestTimeToVisit: "March to May and September to November",
    attractions: ["The Strip", "Bellagio Fountains", "Fremont Street", "High Roller", "Hoover Dam"],
    cuisine: "Luxury dining, buffets, and celebrity chef restaurants",
    currency: "US Dollar (USD)",
    language: "English",
    timezone: "Pacific Time (PT)"
  }
];