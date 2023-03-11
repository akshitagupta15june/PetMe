import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '.';

const NUMBER_OF_LINKS = 10;

describe('Header', () => {
  test('renders Header', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const linkElement = getByText(/saving lives/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('check if buttons and links of header are rendered', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const linkElement = getAllByRole('button');
    expect(linkElement).toHaveLength(1);

    const linkElement2 = getAllByRole('link');
    expect(linkElement2).toHaveLength(NUMBER_OF_LINKS);
  });
});
