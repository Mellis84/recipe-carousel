import axios from 'axios';
import type { Recipe } from '@/types/Recipe';

export const fetchRecipes = async (allowedAllergens: string[]) => {
  try {
    const response = await axios.get<Recipe[]>(
      'https://corsproxy.io/https://www.simplycook.com/api/recipes',
      {
        headers: {
          Accept: 'application/json'
        }
      }
    );

    const filteredRecipesByAllergens = response.data.filter(
      (item) =>
        item.allergens.length > 0 &&
        item.allergens.some((allergen) => allowedAllergens.includes(allergen))
    );

    return filteredRecipesByAllergens || [];
  } catch (error: any) {
    console.error('Error fetching recipes:', error.message || error);
    throw new Error('Failed to fetch recipes');
  }
};
