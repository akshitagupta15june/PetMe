import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Contributors from '.';

describe('Contributors', () => {
  test('renders Contributors', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Contributors />
      </BrowserRouter>,
    );
    const linkElement = getByText(/contributors/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Contributors with snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Contributors />
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
