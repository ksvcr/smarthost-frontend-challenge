import { Form, FormContextProvider } from './components/Form';
import { Summary } from './components/Summary';

export const OccupancyOptimizator = () => {
  return (
    <FormContextProvider>
      <h1>Occupancy Optimizator</h1>
      <Form />
      <Summary />
    </FormContextProvider>
  );
};
