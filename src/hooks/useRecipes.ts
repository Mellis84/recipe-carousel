import { useState, useEffect } from 'react';

import { fetchRecipes } from '@api/fetch-recipes';
import type { Recipe } from '@/types/Recipe';

const useRecipes = (allowedAllergens: string[]) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRecipes(allowedAllergens);
        const mappedData = data.map((recipe: Recipe) => ({
          id: recipe.id,
          name: recipe.name,
          image: recipe.image,
          averageRating: recipe.averageRating,
          shortDescription: recipe.shortDescription,
          cookingTime: recipe.cookingTime,
          topReview: recipe.topReview,
          chilli: recipe.chilli,
          allergens: recipe.allergens
        }));

        setRecipes(mappedData);
      } catch (error: any) {
        setError(error.message || 'Something went wrong!');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { recipes, loading, error };
};

export default useRecipes;
