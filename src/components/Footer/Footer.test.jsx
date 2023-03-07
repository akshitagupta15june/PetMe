import React from 'react';
import { render } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  test('renders Footer', () => {
    const { getByText } = render(<Footer />);
    const linkElement = getByText(/footer/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Footer with snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
