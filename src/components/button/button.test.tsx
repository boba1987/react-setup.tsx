import React from 'react';
import Button from './button';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<App />', () => {
  test('it renders without crashing', () => {
    render(<Button />);
    
    const ButtonScreen = screen.getByTestId('button');

    expect(ButtonScreen).toBeInTheDocument();
  });
});