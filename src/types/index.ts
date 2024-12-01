export type FilterType = 'none' | 'sepia' | 'grayscale' | 'blur' | 'brightness' | 'contrast';

export interface PolaroidSettings {
  caption: string;
  filter: FilterType;
}