import { createContext, useContext, useMemo, useState, useCallback, ReactNode } from 'react';

import { Rooms, RoomType } from 'shared/types';

type FormContextValue = {
  formData: Rooms;
  onChange: (type: RoomType, value: number) => void;
};

type FormContextProviderProps = {
  children: ReactNode;
};

export const FormContext = createContext<FormContextValue | null>(null);

export const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const [formData, setFormData] = useState<Rooms>({ economy: 0, premium: 0 });

  const handleChange = useCallback((type: RoomType, value: number) => {
    setFormData(formData => ({ ...formData, [type]: value }));
  }, []);

  const providerValue = useMemo(() => ({ formData, onChange: handleChange }), [formData, handleChange]);

  return <FormContext.Provider value={providerValue}>{children}</FormContext.Provider>;
};

export function useForm() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }

  const { formData, onChange } = context;

  return useMemo(() => ({ formData, onChange }), [formData, onChange]);
}
