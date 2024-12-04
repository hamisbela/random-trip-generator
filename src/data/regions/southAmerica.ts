import type { City } from '../cities';

export const southAmericaCities: City[] = [
  {
    id: 601,
    name: "Rio de Janeiro",
    country: "Brazil",
    description: "A vibrant city blessed with stunning natural beauty. Rio captivates with its beaches, mountains, and carnival spirit.",
    imageUrl: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80",
    bestTimeToVisit: "December to March",
    attractions: ["Christ the Redeemer", "Copacabana Beach", "Sugarloaf Mountain", "Ipanema", "Maracanã Stadium"],
    cuisine: "Brazilian feijoada, churrasco, and açaí",
    currency: "Brazilian Real (BRL)",
    language: "Portuguese",
    timezone: "Brasília Time (BRT)"
  },
  {
    id: 602,
    name: "Buenos Aires",
    country: "Argentina",
    description: "A passionate city of tango, art, and European-inspired architecture. Experience vibrant neighborhoods and rich cultural heritage.",
    imageUrl: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&q=80",
    bestTimeToVisit: "March to May or September to November",
    attractions: ["La Boca", "Recoleta Cemetery", "Plaza de Mayo", "San Telmo", "Teatro Colón"],
    cuisine: "Argentine steak, empanadas, and mate tea",
    currency: "Argentine Peso (ARS)",
    language: "Spanish",
    timezone: "Argentina Time (ART)"
  },
  {
    id: 603,
    name: "Cusco",
    country: "Peru",
    description: "The historic capital of the Inca Empire. Discover ancient ruins, colonial architecture, and Andean culture.",
    imageUrl: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80",
    bestTimeToVisit: "April to October",
    attractions: ["Machu Picchu", "Plaza de Armas", "Sacsayhuamán", "San Blas", "Sacred Valley"],
    cuisine: "Peruvian ceviche, lomo saltado, and pisco sour",
    currency: "Peruvian Sol (PEN)",
    language: "Spanish, Quechua",
    timezone: "Peru Time (PET)"
  }
];