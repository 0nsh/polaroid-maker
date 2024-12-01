import React, { useState, useEffect, useRef } from 'react';
import { PhotoUpload } from './components/PhotoUpload';
import { PolaroidFrame } from './components/PolaroidFrame';
import { FilterSelector } from './components/FilterSelector';
import { CaptionInput } from './components/CaptionInput';
import { createObjectURL, revokeObjectURL, downloadPolaroid } from './utils/imageUtils';
import { Camera, Download, Github, Coffee } from 'lucide-react';
import type { FilterType } from './types';

function App() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [caption, setCaption] = useState('');
  const [filter, setFilter] = useState<FilterType>('none');
  const polaroidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (imageUrl) {
        revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  const handlePhotoSelect = (file: File) => {
    const url = createObjectURL(file);
    setImageUrl(url);
  };

  const handleSave = () => {
    downloadPolaroid(polaroidRef.current);
  };

  return (
    <div className="px-4 py-8 min-h-screen bg-gradient-to-br from-black to-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="flex gap-3 justify-center items-center mb-4">
            <Camera className="w-10 h-10 text-blue-400" />
            <h1 className="text-5xl font-bold text-white">Polaroid Maker</h1>
          </div>
          <p className="text-lg text-gray-300">Transform your photos into beautiful Polaroid memories</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-4">
            <PhotoUpload onPhotoSelect={handlePhotoSelect} />
          </div>

          <div className="space-y-6 lg:col-span-4">
            {imageUrl ? (
              <div className="p-6 space-y-6 rounded-xl bg-dark-200">
                <CaptionInput
                  caption={caption}
                  onCaptionChange={setCaption}
                />
                
                <div>
                  <h3 className="mb-3 text-sm font-medium text-gray-300">
                    Choose a filter
                  </h3>
                  <FilterSelector
                    currentFilter={filter}
                    onFilterChange={setFilter}
                  />
                </div>

                <button
                  onClick={handleSave}
                  className="flex gap-2 justify-center items-center px-4 py-3 w-full text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700"
                >
                  <Download className="w-5 h-5" />
                  Save Polaroid
                </button>
              </div>
            ) : (
              <div className="flex justify-center items-center h-full">
                <p className="text-center text-gray-400">
                  Upload a photo to start editing
                </p>
              </div>
            )}
          </div>
          
          <div className="flex justify-center lg:col-span-4">
            {imageUrl && (
              <div className="sticky top-8">
                <PolaroidFrame
                  ref={polaroidRef}
                  imageUrl={imageUrl}
                  caption={caption}
                  filter={filter}
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center mt-16 text-gray-400">
          <div className="flex gap-3 items-center">
            <a 
              href="https://github.com/0nsh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex gap-2 items-center text-sm transition-colors hover:text-blue-400"
            >
              <Github className="w-4 h-4" />
              Created by @0nsh
            </a>
            <span className="text-gray-600">•</span>
            <a 
              href="https://www.buymeacoffee.com/0nsh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1 text-sm bg-[#ffdd00] text-[#000000] rounded-md hover:bg-[#ffed4a] transition-colors"
            >
              <Coffee className="w-4 h-4" />
              Buy me a coffee
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;