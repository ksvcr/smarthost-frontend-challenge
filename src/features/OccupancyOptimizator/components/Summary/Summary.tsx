import { Card } from 'shared/components/Card';
import { useGetSummary } from './useGetSummary';

import styles from './Summary.module.css';
import { useMemo } from 'react';

type Row = {
  type: string;
  total: number;
  occupiedRooms: number;
};

export const Summary = () => {
  const results = useGetSummary();

  const rows: Row[] = useMemo(
    () =>
      Object.entries(results).map(([type, { total, occupiedRooms }]) => ({
        type,
        total,
        occupiedRooms
      })),
    [results]
  );

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
