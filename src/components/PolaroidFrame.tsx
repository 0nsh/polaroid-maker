import React, { forwardRef } from 'react';
import { FilterType } from '../types';

interface PolaroidFrameProps {
  imageUrl: string;
  caption: string;
  filter: FilterType;
}

const getFilterStyle = (filter: FilterType): string => {
  switch (filter) {
    case 'sepia':
      return 'sepia(100%)';
    case 'grayscale':
      return 'grayscale(100%)';
    case 'blur':
      return 'blur(1px)';
    case 'brightness':
      return 'brightness(120%)';
    case 'contrast':
      return 'contrast(120%)';
    default:
      return 'none';
  }
};

export const PolaroidFrame = forwardRef<HTMLDivElement, PolaroidFrameProps>(
  ({ imageUrl, caption, filter }, ref) => {
    return (
      <div 
        ref={ref}
        className="transform transition-transform hover:rotate-2 hover:scale-[1.02] duration-300"
      >
        <div 
          className="p-4 rounded-sm polaroid-shadow w-[320px]"
          style={{
            background: 'linear-gradient(to bottom right, #f5f5f0, #f0f0e8)',
            border: '1px solid rgba(0,0,0,0.05)'
          }}
        >
          <div 
            className="relative aspect-[1/1] mb-4 overflow-hidden"
            style={{
              boxShadow: 'inset 0 0 2px rgba(0,0,0,0.15)'
            }}
          >
            <img
              src={imageUrl}
              alt="Polaroid photo"
              className="w-full h-full object-cover"
              style={{ 
                filter: `${getFilterStyle(filter)} contrast(1.05)`,
                borderRadius: '1px'
              }}
            />
          </div>
          <div className="min-h-[48px] flex items-center justify-center px-2">
            <span className="relative inline-block">
              <p 
                className="font-gamja text-[28px] text-center break-words leading-tight tracking-wide relative z-10"
                style={{
                  color: '#1a1a1a',
                  transform: 'rotate(-2deg) skew(-1deg)',
                }}
              >
                {caption || new Date().toLocaleDateString()}
              </p>
              <span 
                className="absolute inset-0 z-0"
                style={{
                  background: '#ffeb3b',
                  opacity: '0.4',
                  transform: 'rotate(-2deg) skew(-3deg)',
                  padding: '0.25em 0.5em',
                  margin: '-0.25em -0.5em',
                  borderRadius: '3px',
                  clipPath: 'polygon(0 15%, 100% 0, 98% 85%, 2% 100%)'
                }}
                aria-hidden="true"
              />
              <span 
                className="absolute inset-0 z-1"
                style={{
                  background: '#ffeb3b',
                  opacity: '0.3',
                  transform: 'rotate(-1deg) skew(-1deg)',
                  padding: '0.35em 0.5em',
                  margin: '-0.35em -0.5em',
                  borderRadius: '4px',
                  clipPath: 'polygon(2% 10%, 98% 5%, 95% 90%, 5% 95%)'
                }}
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
);

PolaroidFrame.displayName = 'PolaroidFrame';