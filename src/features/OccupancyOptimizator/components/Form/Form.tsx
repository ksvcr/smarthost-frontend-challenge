import { ChangeEvent } from 'react';

import { RoomType } from 'shared/types';

import { Input } from 'shared/components/Input';
import { Field } from 'shared/components/Field';
import { Card } from 'shared/components/Card';

import { useForm } from './FormContext';

export const Form = () => {
  const { formData, onChange } = useForm();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    onChange(id as RoomType, Number(value));
  };

  return (
    <Card title="Available rooms">
      <form>
        <Field label="Economy" id="economy">
          <Input type="number" value={formData.economy} onChange={handleInputChange} id="economy" min={0} />
        </Field>
        <Field label="Premium" id="premium">
          <Input type="number" value={formData.premium} onChange={handleInputChange} id="premium" min={0} />
        </Field>
      </form>
    </Card>
  );
};
