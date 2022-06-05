import 'app/styles/index.css';

import { DefaultLayout } from 'shared/components/DefaultLayout';

import { OccupancyOptimizator } from 'features/OccupancyOptimizator';

export const App = () => {
  return (
    <DefaultLayout>
      <OccupancyOptimizator />
    </DefaultLayout>
  );
};
