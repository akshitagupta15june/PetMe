import { render } from '@testing-library/react';
import React from 'react';
import About from '.';

describe('About', () => {
  test('renders About', () => {
    const { getByRole } = render(<About />);
    const heading = getByRole('heading', { name: /about/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders About with the right text', () => {
    const { getByText } = render(<About />);
    const text = getByText(
      /Our mission is to provide a platform that connects animal lovers with pets in need of a forever home, while also providing emergency medical care for stray animals in distress. We strive to make a difference in the lives of these innocent creatures by offering options to Adopt, Donate and through our SOS feature Report stray animals in need of immediate assistance. Together, we can create a better world for all animals./i,
    );
    expect(text).toBeInTheDocument();
  });
});
