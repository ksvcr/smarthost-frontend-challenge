import { ReactNode } from 'react';

type FieldProps = {
  children: ReactNode;
  label?: string;
  id: string;
};

export const Field = ({ children, id, label }: FieldProps) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}

      {children}
    </div>
  );
};
