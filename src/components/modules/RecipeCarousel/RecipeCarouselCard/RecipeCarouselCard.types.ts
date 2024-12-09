import type { Recipe } from '@/types/Recipe';

export interface Props {
  recipe: Recipe;
  id: number;
  isActive: boolean;
  onCardClick: (idx: number) => void;
}
