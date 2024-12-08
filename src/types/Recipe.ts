export interface Recipe {
  id: number;
  name: string;
  image: string;
  averageRating: string;
  shortDescription: string;
  cookingTime: string;
  topReview: string;
  chilli: number;
  allergens: string[];
  [key: string]: any;
}
