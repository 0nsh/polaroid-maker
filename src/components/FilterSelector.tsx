import React from 'react';
import { FilterType } from '../types';

interface FilterSelectorProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export function FilterSelector({ currentFilter, onFilterChange }: FilterSelectorProps) {
  const filters: { label: string; value: FilterType }[] = [
    { label: 'None', value: 'none' },
    { label: 'Sepia', value: 'sepia' },
    { label: 'Grayscale', value: 'grayscale' },
    { label: 'Blur', value: 'blur' },
    { label: 'Brightness', value: 'brightness' },
    { label: 'Contrast', value: 'contrast' },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => onFilterChange(value)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${currentFilter === value
              ? 'bg-blue-600 text-white'
              : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
            }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}