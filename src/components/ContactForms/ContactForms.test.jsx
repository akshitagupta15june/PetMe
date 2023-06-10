import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ContactForms from '.';

describe('Contact Us', () => {
  test('Properly renders page text items', () => {
    const { getByRole, getByText } = render(
      <BrowserRouter>
        <ContactForms />
      </BrowserRouter>,
    );
    const textElement1 = getByRole('heading', { level: 1, name: /contact us/i });
    const textElement2 = getByText(/any issues?/i);
    const textElement3 = getByText(/fill the form/i);
    expect(textElement1).toBeInTheDocument();
    expect(textElement2).toBeInTheDocument();
    expect(textElement3).toBeInTheDocument();
  });

  test('Properly renders form fields labels', () => {
    const { getByText } = render(
      <BrowserRouter>
        <ContactForms />
      </BrowserRouter>,
    );
    const formElemLabel1 = getByText(/full name/i);
    const formElemLabel2 = getByText(/email/i);
    const formElemLabel3 = getByText(/message/i);
    expect(formElemLabel1).toBeInTheDocument();
    expect(formElemLabel2).toBeInTheDocument();
    expect(formElemLabel3).toBeInTheDocument();
  });

  test('Properly renders form input fields', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <ContactForms />
      </BrowserRouter>,
    );
    const formInputElement1 = getByTestId('nameInputField');
    const formInputElement2 = getByTestId('emailInputField');
    const formInputElement3 = getByTestId('messageInputField');
    expect(formInputElement1).toBeInTheDocument();
    expect(formInputElement2).toBeInTheDocument();
    expect(formInputElement3).toBeInTheDocument();
  });

  //   test('Properly redirects to next page upon form submission', () => {
  //     Definition of redirection page and/or action is required.
  //   }); //
});
