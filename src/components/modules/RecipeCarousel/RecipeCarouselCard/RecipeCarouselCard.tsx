import WishlistIcon from '@components/icons/WishlistIcon';

import type { Props } from './RecipeCarouselCard.types.ts';
import styles from './RecipeCarouselCard.module.scss';

export const RecipeCarouselCard: React.FC<Props> = ({
  recipe,
  id,
  isActive,
  onCardClick
}) => {
  return (
    <div
      className={`${styles.card} ${isActive ? styles.active : ''}`}
      role="button"
      tabIndex={0}
      aria-label={`Flip card for ${recipe.name} details`}
      onClick={() => onCardClick(id)}
      onKeyDown={(event) =>
        event.key === 'Enter' || (event.key === ' ' && onCardClick(id))
      }
    >
      <div className={styles.card__inner}>
        <div className={styles.front}>
          <div className={styles.image}>
            <img
              src={recipe.image}
              alt={recipe.name}
              loading="lazy"
              height="262"
              width="390"
            />

            <button type="button" className={styles.addToWishlist}>
              <span className="sr-only">Add to wishlist</span>
              <WishlistIcon />
            </button>
          </div>

          <div className={styles.meta}>
            <h2 className="h4">{recipe.name}</h2>
            <p>{recipe.shortDescription}</p>
          </div>
        </div>

        <div className={styles.back}>
          <span>
            <strong>Cooking time:</strong> {recipe.cookingTime}m
          </span>
          <span>
            <strong>Rating:</strong> {recipe.averageRating}
          </span>
          <span>
            <strong>Chilli level:</strong> {recipe.chilli}
          </span>
          <span>
            <strong>Top review:</strong> {recipe.topReview}
          </span>
        </div>
      </div>
    </div>
  );
};
