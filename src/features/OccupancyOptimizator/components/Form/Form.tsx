import { ChangeEvent } from 'react';

import { RoomType, Rooms } from 'features/OccupancyOptimizator/types';

import { Input } from 'shared/components/Input';
import { Field } from 'shared/components/Field';
import { Card } from 'shared/components/Card';

type FormProps = {
  rooms: Rooms;
  onChange: (type: RoomType, value: number) => void;
};

export const Form = ({ rooms, onChange }: FormProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    onChange(id as RoomType, Number(value));
  };

  return (
    <Card title="Available rooms">
      <form>
        <Field label="Economy" id="economy">
          <Input type="number" value={rooms.economy} onChange={handleInputChange} id="economy" min={0} />
        </Field>
        <Field label="Premium" id="premium">
          <Input type="number" value={rooms.premium} onChange={handleInputChange} id="premium" min={0} />
        </Field>
      </form>
    </Card>
  );
};
