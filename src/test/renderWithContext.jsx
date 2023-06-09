import { render } from '@testing-library/react';
import HeaderProvider from '../context/HeaderProvider';

const renderWithContext = (component) => ({
  ...render(
    <HeaderProvider>
      {component}
    </HeaderProvider>,
  ),
});
export default renderWithContext;
