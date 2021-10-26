import React, { lazy, Suspense } from 'react';

const LazyTodo = lazy(() => import('./Todo'));

const Todo = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTodo id={0} done={false} title={''} description={''} {...props} />
  </Suspense>
);

export default Todo;
