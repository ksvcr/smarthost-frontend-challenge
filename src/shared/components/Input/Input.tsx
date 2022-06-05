import { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>;

export const Input = ({ ...props }: InputProps) => {
  return <input className={styles.input} {...props} />;
};
