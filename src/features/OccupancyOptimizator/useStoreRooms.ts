import { useState, useCallback } from 'react';

import { Rooms, RoomType } from './types';

export function useStoreRooms() {
  const [rooms, setRooms] = useState<Rooms>({ economy: 0, premium: 0 });

  const handleChange = useCallback((type: RoomType, value: number) => {
    setRooms(data => ({ ...data, [type]: value }));
  }, []);

  return { rooms, onChange: handleChange };
}
