import { ReactNode } from 'react';

import styles from './DefaultLayout.module.css';

type DefaultLayoutProps = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return <main className={styles['layout']}>{children}</main>;
};
