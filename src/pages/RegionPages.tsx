import React from 'react';
import RegionGenerator from '../components/RegionGenerator';
import { usaCities } from '../data/regions/usa';
import { asiaCities } from '../data/regions/asia';
import { europeCities } from '../data/regions/europe';
import { australiaCities } from '../data/regions/australia';
import { africaCities } from '../data/regions/africa';
import { southAmericaCities } from '../data/regions/southAmerica';
import SEOSection from '../components/SEOSection';

export function USAPage() {
  return (
    <div>
      <RegionGenerator cities={usaCities} region="USA" />
      <SEOSection />
    </div>
  );
}

export function AsiaPage() {
  return (
    <div>
      <RegionGenerator cities={asiaCities} region="Asia" />
      <SEOSection />
    </div>
  );
}

export function EuropePage() {
  return (
    <div>
      <RegionGenerator cities={europeCities} region="Europe" />
      <SEOSection />
    </div>
  );
}

export function AustraliaPage() {
  return (
    <div>
      <RegionGenerator cities={australiaCities} region="Australia" />
      <SEOSection />
    </div>
  );
}

export function AfricaPage() {
  return (
    <div>
      <RegionGenerator cities={africaCities} region="Africa" />
      <SEOSection />
    </div>
  );
}

export function SouthAmericaPage() {
  return (
    <div>
      <RegionGenerator cities={southAmericaCities} region="South America" />
      <SEOSection />
    </div>
  );
}