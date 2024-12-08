import useRecipes from '@hooks/useRecipes';
import { RecipeCarouselCard } from './';
import styles from './RecipeCarousel.module.scss';

const RecipeCarousel: React.FC = () => {
  const ALLOWED_ALLERGENS = ['Fish', 'Eggs', 'Crustaceans'];
  const { recipes, loading, error } = useRecipes(ALLOWED_ALLERGENS);

  return (
    <div className={styles.carousel}>
      {recipes.map((recipe) => (
        <RecipeCarouselCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeCarousel;
