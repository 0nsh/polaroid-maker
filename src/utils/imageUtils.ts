import { toPng } from 'html-to-image';

export const createObjectURL = (file: File): string => {
  return URL.createObjectURL(file);
};

export const revokeObjectURL = (url: string): void => {
  URL.revokeObjectURL(url);
};

export const downloadPolaroid = async (element: HTMLElement | null) => {
  if (!element) return;
  
  try {
    const dataUrl = await toPng(element, { quality: 0.95 });
    const link = document.createElement('a');
    link.download = `polaroid-${Date.now()}.png`;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('Error saving image:', error);
  }
};