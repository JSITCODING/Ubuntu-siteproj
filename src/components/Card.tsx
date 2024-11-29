import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

export function Card({ icon: Icon, title, children }: CardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#E65100]">
      <Icon className="h-12 w-12 text-[#E65100] mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  );
}