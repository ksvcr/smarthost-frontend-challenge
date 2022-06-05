import 'app/styles/index.css';

import { DefaultLayout } from 'shared/components/DefaultLayout';
import { ErrorBoundary } from 'shared/components/ErrorBoundary';

import { OccupancyOptimizator } from 'features/OccupancyOptimizator';

export const App = () => {
  return (
    <ErrorBoundary>
      <DefaultLayout>
        <OccupancyOptimizator />
      </DefaultLayout>
    </ErrorBoundary>
  );
};
