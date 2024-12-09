import React, { useRef, useState } from 'react';
import ContentLoader from 'react-content-loader';
import { motion } from 'framer-motion';

import useRecipes from '@hooks/useRecipes';
import { RecipeCarouselCard } from './';
import styles from './RecipeCarousel.module.scss';

const RecipeCarousel: React.FC = () => {
  const ALLOWED_ALLERGENS = ['Fish', 'Eggs', 'Crustaceans'];
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const { recipes, loading } = useRecipes(ALLOWED_ALLERGENS);

  const handleCardClick = (id: number) => {
    setActiveCardId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className={styles.carousel} ref={carouselRef}>
      <motion.div
        className={styles.carousel__inner}
        drag="x"
        dragConstraints={carouselRef}
      >
        {loading ? (
          Array.from({ length: 3 }).map((_, idx) => (
            <ContentLoader
              key={idx}
              viewBox="0 0 530 500"
              width="100%"
              height="100%"
              className={styles.loader}
            >
              <rect x="0" y="0" rx="8" ry="8" width="100%" height="353" />
              <rect x="0" y="375" rx="0" ry="0" width="292" height="20" />
              <rect x="0" y="410" rx="0" ry="0" width="239" height="20" />
              <rect x="0" y="445" rx="0" ry="0" width="500" height="15" />
              <rect x="0" y="475" rx="0" ry="0" width="480" height="15" />
            </ContentLoader>
          ))
        ) : recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCarouselCard
              key={recipe.id}
              recipe={recipe}
              id={recipe.id}
              isActive={activeCardId === recipe.id}
              onCardClick={handleCardClick}
            />
          ))
        ) : (
          <h2>No recipes found</h2>
        )}
      </motion.div>
    </div>
  );
};

export default RecipeCarousel;
