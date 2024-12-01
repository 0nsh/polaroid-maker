import React from 'react';

interface CaptionInputProps {
  caption: string;
  onCaptionChange: (caption: string) => void;
}

export function CaptionInput({ caption, onCaptionChange }: CaptionInputProps) {
  return (
    <div className="w-full">
      <label htmlFor="caption" className="block text-sm font-medium text-gray-300 mb-1">
        Caption
      </label>
      <input
        type="text"
        id="caption"
        value={caption}
        onChange={(e) => onCaptionChange(e.target.value)}
        placeholder="Add a caption to your photo..."
        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
        maxLength={50}
      />
    </div>
  );
}