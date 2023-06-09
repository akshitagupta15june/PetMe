import { BrowserRouter } from 'react-router-dom';
import Header from '.';
import renderWithContext from '../../test/renderWithContext';

const NUMBER_OF_LINKS = 8;

describe('Header', () => {
  test('renders Header', () => {
    const { getByText } = renderWithContext(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const linkElement = getByText(/saving lives/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('check if buttons and links of header are rendered', () => {
    const { getAllByRole } = renderWithContext(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const linkElement = getAllByRole('button');
    expect(linkElement).toHaveLength(1);

    const linkElement2 = getAllByRole('link');
    expect(linkElement2).toHaveLength(NUMBER_OF_LINKS);
  });

  test('check if menu items are render', () => {
    const { getAllByRole } = renderWithContext(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const linkElement = getAllByRole('button');
    expect(linkElement).toHaveLength(1);
  });
});
