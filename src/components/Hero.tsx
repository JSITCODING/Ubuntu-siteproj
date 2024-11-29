import React from 'react';
import { Heart } from 'lucide-react';
import { colors } from '../constants/colors';

export function Hero() {
  return (
    <div className="relative bg-[#8B4513] text-white">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="https://images.unsplash.com/photo-1608508644931-e5f8c8c4f31f?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2340"
          alt="African community celebration"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B4513]/80 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-[#D4A017]" />
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Ubuntu: Embracing Humanity and Connection
          </h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto">
            "I am because we are" - Discover the profound African philosophy that teaches us about our interconnectedness and shared humanity.
          </p>
        </div>
      </div>
    </div>
  );
}