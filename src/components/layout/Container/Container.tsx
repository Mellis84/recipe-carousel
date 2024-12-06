import styles from './Container.module.scss';
import type { Props } from './Container.types.ts';

const Container: React.FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
