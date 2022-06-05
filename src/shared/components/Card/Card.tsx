import { ReactNode } from 'react';
import styles from './Card.module.css';

type CardProps = {
  children: ReactNode;
  title: string;
};

export const Card = ({ children, title }: CardProps) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};
