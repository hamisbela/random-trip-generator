import type { City } from '../cities';

export const europeCities: City[] = [
  {
    id: 301,
    name: "Paris",
    country: "France",
    description: "The City of Light beckons with its iconic Eiffel Tower, world-class museums, and charming cafés. Experience the epitome of romance, art, and gastronomy.",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80",
    bestTimeToVisit: "April to October",
    attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Champs-Élysées", "Montmartre"],
    cuisine: "French cuisine featuring croissants, coq au vin, and fine wines",
    currency: "Euro (EUR)",
    language: "French",
    timezone: "Central European Time (CET)"
  },
  {
    id: 302,
    name: "Rome",
    country: "Italy",
    description: "The Eternal City where ancient history comes alive. Rome enchants with its archaeological treasures, artistic masterpieces, and dolce vita lifestyle.",
    imageUrl: "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&q=80",
    bestTimeToVisit: "April to mid-June or September to October",
    attractions: ["Colosseum", "Vatican Museums", "Trevi Fountain", "Roman Forum", "Pantheon"],
    cuisine: "Italian cuisine featuring pasta, pizza, and gelato",
    currency: "Euro (EUR)",
    language: "Italian",
    timezone: "Central European Time (CET)"
  },
  {
    id: 303,
    name: "Barcelona",
    country: "Spain",
    description: "A masterpiece of modernist architecture and Mediterranean charm. Barcelona captivates with Gaudí's works, vibrant culture, and beautiful beaches.",
    imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80",
    bestTimeToVisit: "May to June or September to October",
    attractions: ["Sagrada Familia", "Park Güell", "Las Ramblas", "Gothic Quarter", "Camp Nou"],
    cuisine: "Catalan cuisine with tapas, paella, and seafood",
    currency: "Euro (EUR)",
    language: "Spanish, Catalan",
    timezone: "Central European Time (CET)"
  }
];