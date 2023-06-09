import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnimalsCard from '.';

const NUMBER_OF_ANIMALS = 12;
const NUMBER_OF_ANIMALS_INFO = 36;

describe('AnimalsCard', () => {
  test('renders AnimalsCard', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <AnimalsCard />
      </BrowserRouter>,
    );

    const buttonAdopt = getAllByRole('button', { name: /adopt/i });
    expect(buttonAdopt).toHaveLength(NUMBER_OF_ANIMALS);
  });

  test('renders the right number of animals img', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <AnimalsCard />
      </BrowserRouter>,
    );

    const img = getAllByRole('img');
    expect(img).toHaveLength(6);
  });

  test('renders the right number of information about animals', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <AnimalsCard />
      </BrowserRouter>,
    );

    const heading = getAllByRole('heading', { level: 2 });
    expect(heading).toHaveLength(NUMBER_OF_ANIMALS_INFO);
  });

  test('renders the right number of animals name', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <AnimalsCard />
      </BrowserRouter>,
    );

    const heading = getAllByRole('heading', { level: 1 });
    expect(heading).toHaveLength(7);
  });
});
