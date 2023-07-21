import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ScrollToTop from '.';

describe('ScrollToTop', () => {
  // Helper function to mock the scroll position
  function mockScrollPosition(scrollTop) {
    Object.defineProperty(document.documentElement, 'scrollTop', {
      value: scrollTop,
      configurable: true,
    });
  }

  it('should render the component', () => {
    const { getByTestId } = render(<ScrollToTop />);
    const icon = getByTestId('scrollToTopIcon');
    expect(icon).toBeInTheDocument();
  });

  it('should show the icon when scrolled more than 250 pixels', () => {
    Object.defineProperty(window, 'scrollY', { value: 300 });
    const { getByTestId } = render(<ScrollToTop />);
    const icon = getByTestId('scrollToTopIcon');
    expect(icon).toBeInTheDocument();
  });

  it('should hide the icon when scrolled less than or equal to 250 pixels', () => {
    Object.defineProperty(window, 'scrollY', { value: 200 });
    const { getByTestId } = render(<ScrollToTop />);
    const icon = getByTestId('scrollToTopIcon');
    expect(icon).not.toBeVisible();
  });

  it('should scroll to top when the icon is clicked', () => {
    Object.defineProperty(window, 'scrollY', { value: 500 });

    const { getByTestId } = render(<ScrollToTop />);
    const icon = getByTestId('scrollToTopIcon');

    // Simulate a click event on the icon
    fireEvent.click(icon);

    // Expect the scrollTo function to be called with top: 0 and behavior: 'smooth'
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });

  it('should not throw an error if window.scrollTo is not defined', () => {
    // Temporarily remove the scrollTo method from the window object
    const originalScrollTo = window.scrollTo;
    delete window.scrollTo;

    // Render the component and ensure it doesn't throw an error
    expect(() => render(<ScrollToTop />)).not.toThrow();

    // Restore the original scrollTo method
    window.scrollTo = originalScrollTo;
  });
});
