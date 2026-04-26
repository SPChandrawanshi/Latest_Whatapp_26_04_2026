import React from 'react';
import { twMerge } from 'tailwind-merge';

export function Card({ children, className, hover = true }) {
  return (
    <div
      className={twMerge(
        'bg-white rounded-2xl p-6 shadow-premium border border-transparent transition-all duration-200',
        hover && 'hover:border-primary',
        className
      )}
    >
      {children}
    </div>
  );
}
