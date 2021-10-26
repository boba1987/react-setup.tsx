import React from 'react';
import App from '.';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router, } from 'react-router-dom';

describe('<App />', () => {
  test('it should mount', () => {
    render(<Router>
      <App />
    </Router>);
    
    const AppScreen = screen.getByTestId('App');

    expect(AppScreen).toBeInTheDocument();
  });
});
