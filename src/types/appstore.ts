export interface AppListing {
  id: string;
  name: string;
  developer: string;
  description: string;
  dependencies: string;
  compatibility: string[];
  category: string;
  rating: number;
  downloads: number;
}