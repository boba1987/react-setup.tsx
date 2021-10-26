import React, { lazy, Suspense } from 'react';

const LazyErrorBoundary = lazy(() => import('./ErrorBoundary'));

const ErrorBoundary = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyErrorBoundary {...props} />
  </Suspense>
);

export default ErrorBoundary;
