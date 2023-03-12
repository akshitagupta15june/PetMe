import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '.';

describe('Footer', () => {
  test('renders Footer', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    expect(getByText(/Adopt/i)).toBeInTheDocument();
  });
});
