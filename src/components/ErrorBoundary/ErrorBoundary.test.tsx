import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorBoundary from './ErrorBoundary';

describe('<ErrorBoundary />', () => {
  test('it should mount', () => {
    render(<ErrorBoundary />);
    
    const errorBoundary = screen.getByTestId('ErrorBoundary');

    expect(errorBoundary).toBeInTheDocument();
  });
});