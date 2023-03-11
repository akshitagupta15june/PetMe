import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';
import Contributors from '.';

describe('Contributors', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch').mockImplementation(() => {
      const contributors = [
        {
          id: 1,
          login: 'test',
          avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
          html_url: '',
        },
      ];
      return Promise.resolve({
        json: () => Promise.resolve(contributors),
      });
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('renders Contributors', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Contributors />
      </BrowserRouter>,
    );
    const linkElement = getByText(/contributors/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders img of contributors', async () => {
    const { findAllByTestId } = render(
      <BrowserRouter>
        <Contributors />
      </BrowserRouter>,
    );
    const divElement = await findAllByTestId('contributor-img');
    expect(divElement).not.toHaveLength(0);
  });
});
