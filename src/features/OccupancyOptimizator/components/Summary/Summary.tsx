import { useMemo } from 'react';

import { Card } from 'shared/components/Card';
import { Rooms } from 'features/OccupancyOptimizator/types';

import { groupGuestsByRoom } from './utils/groupGuestsByRoom';
import { GUESTS } from './constants/guests';

import styles from './Summary.module.css';

type Row = {
  type: string;
  total: number;
  occupiedRooms: number;
};

type SummaryProps = {
  rooms: Rooms;
};

export const Summary = ({ rooms }: SummaryProps) => {
  const rows: Row[] = useMemo(() => {
    const groups = groupGuestsByRoom(rooms, GUESTS);

    return Object.entries(groups).map(([type, { total, occupiedRooms }]) => ({
      type,
      total,
      occupiedRooms
    }));
  }, [rooms]);

  return (
    <Card title="Summary">
      <table className={styles.table}>
        <thead>
          <tr>
            <td />
            <td>Usage</td>
            <td>Revenue</td>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ type, total, occupiedRooms }) => (
            <tr key={type}>
              <td className={styles.type}>{type}:</td>
              <td>{occupiedRooms}</td>
              <td>{total} €</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};
