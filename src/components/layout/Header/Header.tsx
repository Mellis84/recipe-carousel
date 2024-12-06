import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        Recipe <span>Carousel</span>
      </h1>
    </header>
  );
};

export default Header;
