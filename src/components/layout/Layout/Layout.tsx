import Header from '@components/layout/Header';

import type { Props } from './Layout.types.ts';
import styles from './Layout.module.scss';

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
