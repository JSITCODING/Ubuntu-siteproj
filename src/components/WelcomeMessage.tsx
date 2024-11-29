import React from 'react';
import { Heart } from 'lucide-react';

export function WelcomeMessage() {
  return (
    <div className="fixed bottom-8 right-8 max-w-md bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#E65100] animate-fade-in">
      <div className="flex items-start space-x-4">
        <Heart className="h-6 w-6 text-[#E65100] flex-shrink-0" />
        <div>
          <h4 className="text-lg font-semibold text-[#2C1810] mb-2">
            Welcome to Ubuntu Association!
          </h4>
          <p className="text-gray-600">
            Thank you for joining our community. Your presence enriches us all. 
            Check out our Community page to discover upcoming events and ways to connect!
          </p>
        </div>
      </div>
    </div>
  );
}