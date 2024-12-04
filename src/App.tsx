import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { 
  USAPage, 
  AsiaPage, 
  EuropePage, 
  AustraliaPage,
  AfricaPage,
  SouthAmericaPage 
} from './pages/RegionPages';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usa" element={<USAPage />} />
            <Route path="/asia" element={<AsiaPage />} />
            <Route path="/europe" element={<EuropePage />} />
            <Route path="/australia" element={<AustraliaPage />} />
            <Route path="/africa" element={<AfricaPage />} />
            <Route path="/south-america" element={<SouthAmericaPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}