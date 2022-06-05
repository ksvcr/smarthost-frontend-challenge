import { ReactNode } from 'react';
import styles from './Field.module.css';

type FieldProps = {
  children: ReactNode;
  label?: string;
  id: string;
};

export const Field = ({ children, id, label }: FieldProps) => {
  return (
    <div className={styles.field}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}:
        </label>
      )}
      <div className={styles.value}>{children}</div>
    </div>
  );
};
