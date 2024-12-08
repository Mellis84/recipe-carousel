import WishlistIcon from '@components/icons/WishlistIcon';

import type { Props } from './RecipeCarouselCard.types.ts';
import styles from './RecipeCarouselCard.module.scss';

export const RecipeCarouselCard: React.FC<Props> = ({ recipe }) => {
  return (
    <div
      className={styles.card}
      role="button"
      tabIndex={0}
      aria-label={`Flip card for ${recipe.name} details`}
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

        <div className={styles.back}>{recipe.cookingTime}</div>
      </div>
    </div>
  );
};
