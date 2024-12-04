export interface City {
  id: number;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  bestTimeToVisit: string;
  attractions: string[];
  cuisine: string;
  currency: string;
  language: string;
  timezone: string;
}

export const cities: City[] = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    description: "The City of Light beckons with its iconic Eiffel Tower, world-class museums, and charming cafés. Experience the epitome of romance, art, and gastronomy in this timeless metropolis.",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80",
    bestTimeToVisit: "April to October",
    attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Champs-Élysées", "Montmartre"],
    cuisine: "French cuisine featuring croissants, coq au vin, and fine wines",
    currency: "Euro (EUR)",
    language: "French",
    timezone: "Central European Time (CET)"
  },
  {
    id: 2,
    name: "Tokyo",
    country: "Japan",
    description: "A dazzling fusion of traditional culture and cutting-edge technology. Tokyo offers an unforgettable journey through ancient temples, futuristic districts, and world-renowned gastronomy.",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80",
    bestTimeToVisit: "March to May or September to November",
    attractions: ["Senso-ji Temple", "Shibuya Crossing", "Tokyo Skytree", "Tsukiji Fish Market", "Akihabara"],
    cuisine: "Japanese cuisine including sushi, ramen, and tempura",
    currency: "Japanese Yen (JPY)",
    language: "Japanese",
    timezone: "Japan Standard Time (JST)"
  },
  {
    id: 3,
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
    id: 4,
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
  },
  {
    id: 5,
    name: "Dubai",
    country: "UAE",
    description: "A futuristic oasis rising from the desert. Dubai amazes with its architectural marvels, luxury shopping, and blend of traditional and modern culture.",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80",
    bestTimeToVisit: "November to March",
    attractions: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Dubai Marina", "Gold Souk"],
    cuisine: "Middle Eastern cuisine with shawarma, hummus, and dates",
    currency: "UAE Dirham (AED)",
    language: "Arabic, English",
    timezone: "Gulf Standard Time (GST)"
  },
  {
    id: 6,
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
    id: 7,
    name: "Sydney",
    country: "Australia",
    description: "A stunning harbor city where urban sophistication meets beach lifestyle. Sydney offers iconic architecture, beautiful coastlines, and vibrant culture.",
    imageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80",
    bestTimeToVisit: "September to November or March to May",
    attractions: ["Sydney Opera House", "Harbour Bridge", "Bondi Beach", "Royal Botanic Garden", "Taronga Zoo"],
    cuisine: "Modern Australian cuisine with seafood and Asian influences",
    currency: "Australian Dollar (AUD)",
    language: "English",
    timezone: "Australian Eastern Time (AET)"
  },
  {
    id: 8,
    name: "Amsterdam",
    country: "Netherlands",
    description: "A picturesque city of canals, cycling culture, and artistic heritage. Amsterdam charms with its historic architecture and laid-back atmosphere.",
    imageUrl: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&q=80",
    bestTimeToVisit: "April to May or September to November",
    attractions: ["Anne Frank House", "Rijksmuseum", "Van Gogh Museum", "Canal Ring", "Royal Palace"],
    cuisine: "Dutch cuisine with stroopwafels, cheese, and herring",
    currency: "Euro (EUR)",
    language: "Dutch, English widely spoken",
    timezone: "Central European Time (CET)"
  },
  {
    id: 9,
    name: "Singapore",
    country: "Singapore",
    description: "A futuristic garden city where cultures blend seamlessly. Singapore impresses with its innovative architecture, lush gardens, and world-class dining.",
    imageUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80",
    bestTimeToVisit: "February to April",
    attractions: ["Gardens by the Bay", "Marina Bay Sands", "Sentosa Island", "Singapore Zoo", "Orchard Road"],
    cuisine: "Diverse Asian cuisine with hawker centers and fine dining",
    currency: "Singapore Dollar (SGD)",
    language: "English, Mandarin, Malay, Tamil",
    timezone: "Singapore Time (SGT)"
  },
  {
    id: 10,
    name: "Rio de Janeiro",
    country: "Brazil",
    description: "A vibrant city blessed with stunning natural beauty. Rio captivates with its beaches, mountains, and carnival spirit.",
    imageUrl: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80",
    bestTimeToVisit: "December to March",
    attractions: ["Christ the Redeemer", "Copacabana Beach", "Sugarloaf Mountain", "Ipanema", "Maracanã Stadium"],
    cuisine: "Brazilian cuisine with feijoada, churrasco, and açaí",
    currency: "Brazilian Real (BRL)",
    language: "Portuguese",
    timezone: "Brasília Time (BRT)"
  }
];