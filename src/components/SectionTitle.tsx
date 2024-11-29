import React from 'react';
import { colors } from '../constants/colors';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`text-3xl font-bold text-center mb-12 text-[${colors.text.primary}] ${className}`}>
      {children}
    </h2>
  );
}