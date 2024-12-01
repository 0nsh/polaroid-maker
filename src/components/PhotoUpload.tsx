import React from 'react';
import { Upload } from 'lucide-react';

interface PhotoUploadProps {
  onPhotoSelect: (file: File) => void;
}

export function PhotoUpload({ onPhotoSelect }: PhotoUploadProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onPhotoSelect(file);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <label 
        htmlFor="photo-upload" 
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer hover:bg-gray-900 transition-colors bg-gray-800"
      >
        <Upload className="w-12 h-12 text-blue-400 mb-2" />
        <span className="text-sm text-gray-300">Click to upload a photo</span>
      </label>
      <input
        id="photo-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}