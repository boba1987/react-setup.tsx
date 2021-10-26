import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Todo from './Todo';

describe('<Todo />', () => {
  test('it should mount', () => {
    render(<Todo id={0} done={false} title={''} description={''} createdAt={undefined} updatedAt={undefined} />);
    
    const todo = screen.getByTestId('Todo');

    expect(todo).toBeInTheDocument();
  });
});