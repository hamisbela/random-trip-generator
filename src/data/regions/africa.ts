import type { City } from '../cities';

export const africaCities: City[] = [
  {
    id: 501,
    name: "Cape Town",
    country: "South Africa",
    description: "A stunning coastal city where mountains meet the ocean. Experience diverse culture, beautiful landscapes, and rich history.",
    imageUrl: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&q=80",
    bestTimeToVisit: "March to May or September to November",
    attractions: ["Table Mountain", "Robben Island", "V&A Waterfront", "Cape of Good Hope", "Boulders Beach"],
    cuisine: "South African braai, Cape Malay cuisine, and seafood",
    currency: "South African Rand (ZAR)",
    language: "English, Afrikaans, Xhosa",
    timezone: "South African Standard Time (SAST)"
  },
  {
    id: 502,
    name: "Marrakech",
    country: "Morocco",
    description: "A magical city of markets, palaces, and gardens. Immerse yourself in the vibrant colors and rich traditions of North Africa.",
    imageUrl: "https://images.unsplash.com/photo-1597211684565-dca64d72c5cc?auto=format&fit=crop&q=80",
    bestTimeToVisit: "March to May or September to November",
    attractions: ["Djemaa el-Fna", "Jardin Majorelle", "Medina", "Bahia Palace", "Koutoubia Mosque"],
    cuisine: "Moroccan tagines, couscous, and mint tea",
    currency: "Moroccan Dirham (MAD)",
    language: "Arabic, French",
    timezone: "Western European Time (WET)"
  },
  {
    id: 503,
    name: "Cairo",
    country: "Egypt",
    description: "The capital of ancient wonders and modern culture. Discover pyramids, bustling markets, and the mighty Nile River.",
    imageUrl: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80",
    bestTimeToVisit: "October to April",
    attractions: ["Pyramids of Giza", "Egyptian Museum", "Khan el-Khalili", "Nile River", "Coptic Cairo"],
    cuisine: "Egyptian koshari, ful medames, and shawarma",
    currency: "Egyptian Pound (EGP)",
    language: "Arabic",
    timezone: "Eastern European Time (EET)"
  }
];