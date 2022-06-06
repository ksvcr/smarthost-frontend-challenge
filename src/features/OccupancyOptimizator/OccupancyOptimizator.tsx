import { Form } from './components/Form';
import { Summary } from './components/Summary';

import { useStoreRooms } from './useStoreRooms';

export const OccupancyOptimizator = () => {
  const { rooms, onChange } = useStoreRooms();

  return (
    <>
      <h1>Occupancy Optimizator</h1>
      <Form rooms={rooms} onChange={onChange} />
      <Summary rooms={rooms} />
    </>
  );
};
