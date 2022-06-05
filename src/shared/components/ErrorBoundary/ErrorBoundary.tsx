import { ReactNode } from 'react';
import { ErrorBoundary as ReactErrorBoundary, FallbackProps } from 'react-error-boundary';

import { DefaultLayout } from 'shared/components/DefaultLayout';
import { Button } from 'shared/components/Button';

type ErrorBoundaryProps = {
  children: ReactNode;
};

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <DefaultLayout>
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <Button onClick={resetErrorBoundary} type="button">
          Try again
        </Button>
      </div>
    </DefaultLayout>
  );
};

export const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  return <ReactErrorBoundary FallbackComponent={ErrorFallback}>{children}</ReactErrorBoundary>;
};
