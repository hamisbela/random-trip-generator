import type { City } from '../cities';

export const asiaCities: City[] = [
  {
    id: 201,
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
    id: 202,
    name: "Bangkok",
    country: "Thailand",
    description: "A vibrant metropolis where traditional meets modern. Experience ornate temples, floating markets, and legendary street food.",
    imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&q=80",
    bestTimeToVisit: "November to March",
    attractions: ["Grand Palace", "Wat Arun", "Chatuchak Market", "Khao San Road", "Chao Phraya River"],
    cuisine: "Thai street food, curries, and fresh seafood",
    currency: "Thai Baht (THB)",
    language: "Thai",
    timezone: "Indochina Time (ICT)"
  },
  {
    id: 203,
    name: "Seoul",
    country: "South Korea",
    description: "A dynamic city blending ancient traditions with modern innovations. Discover palaces, K-pop culture, and cutting-edge technology.",
    imageUrl: "https://images.unsplash.com/photo-1538485399081-7c8272e0fe66?auto=format&fit=crop&q=80",
    bestTimeToVisit: "March to May or September to November",
    attractions: ["Gyeongbokgung Palace", "Namsan Seoul Tower", "Myeongdong", "Bukchon Hanok Village", "Gangnam District"],
    cuisine: "Korean BBQ, kimchi, and street food",
    currency: "South Korean Won (KRW)",
    language: "Korean",
    timezone: "Korea Standard Time (KST)"
  }
];