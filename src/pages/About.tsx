import React from 'react';
import { Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Globe className="h-16 w-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About RandomTripGenerator</h1>
      </div>

      <div className="prose prose-lg max-w-none">
        <p>
          Welcome to RandomTripGenerator, where we believe that sometimes the best adventures are the ones 
          we never planned. Our platform was born from a simple idea: to help travelers break free from 
          decision paralysis and discover exciting new destinations they might never have considered.
        </p>

        <h2>Our Mission</h2>
        <p>
          We're passionate about making travel planning fun and spontaneous. Our mission is to inspire 
          people to step out of their comfort zones and explore the world in unexpected ways. By 
          combining technology with the thrill of surprise, we're revolutionizing how people choose 
          their next travel destination.
        </p>

        <h2>How We Started</h2>
        <p>
          RandomTripGenerator began as a solution to a common problem: the overwhelming number of choices 
          when planning a trip. We realized that sometimes having too many options can be paralyzing, 
          and that's when we decided to create a tool that would make the decision for you.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li>Spontaneity in travel</li>
          <li>Making travel planning stress-free</li>
          <li>Encouraging global exploration</li>
          <li>Promoting cultural understanding</li>
        </ul>
      </div>
    </div>
  );
}