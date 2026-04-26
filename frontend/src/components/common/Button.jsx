import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Button({ className, variant = 'primary', ...props }) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-slate-600 hover:bg-slate-100',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button
      className={twMerge(
        'px-4 py-2 rounded-lg transition-all duration-200 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
