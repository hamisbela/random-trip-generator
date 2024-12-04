import React from 'react';
import { Compass, Map, Globe2, PlaneLanding } from 'lucide-react';

export default function SEOSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Discover Your Next Adventure</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <Compass className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-semibold">Reverse Random Trip Generator</h3>
            </div>
            <p className="text-gray-600">
              Our innovative reverse random trip generator takes the stress out of travel planning. 
              Let our algorithm surprise you with carefully curated destinations that match your 
              sense of adventure.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <Map className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-semibold">Spontaneous Travel Planning</h3>
            </div>
            <p className="text-gray-600">
              Break free from conventional travel planning with our reverse random trip generator. 
              Discover unexpected destinations and create unforgettable memories.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <section className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <Globe2 className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-semibold">Why Use Our Random Trip Generator?</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>• Instant destination inspiration with our reverse random trip generator</li>
              <li>• Curated selection of popular global destinations</li>
              <li>• Comprehensive travel information and booking links</li>
              <li>• Perfect for spontaneous travelers and adventure seekers</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <PlaneLanding className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">How does the reverse random trip generator work?</h4>
                <p className="text-gray-600">
                  Our reverse random trip generator uses an advanced algorithm to suggest exciting 
                  destinations from our carefully curated database. Each suggestion includes 
                  comprehensive travel information and direct booking links.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Is the reverse random trip generator free to use?</h4>
                <p className="text-gray-600">
                  Yes! Our reverse random trip generator is completely free to use. Generate as many 
                  random destinations as you like until you find your perfect match.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}