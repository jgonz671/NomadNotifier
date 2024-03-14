// SignIn.test.jsx
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginPage from './SignIn'; 
import * as firebaseAuth from 'firebase/auth';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

jest.mock('firebase/auth', () => ({
  ...jest.requireActual('firebase/auth'),
  signInWithEmailAndPassword: jest.fn(),
}));

describe('LoginPage', () => {
  const mockedSignInWithEmailAndPassword = jest.mocked(firebaseAuth.signInWithEmailAndPassword);

  beforeEach(() => {
    mockedSignInWithEmailAndPassword.mockClear();
  });

  test('renders login form with email and password inputs and a submit button', () => {
    const { getByLabelText, getByText } = render(<LoginPage />);
    
    expect(getByLabelText(/email/i)).toBeInTheDocument();
    expect(getByLabelText(/password/i)).toBeInTheDocument();
    expect(getByText(/enter/i)).toBeInTheDocument();
  });

  test('calls signInWithEmailAndPassword on form submit with entered email and password', async () => {
    const { getByLabelText, getByText } = render(<LoginPage />);
    const emailInput = getByLabelText(/email/i);
    const passwordInput = getByLabelText(/password/i);
    const submitButton = getByText(/enter/i);

    mockedSignInWithEmailAndPassword.mockResolvedValue({
      user: {
        uid: '123',
      },
    });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedSignInWithEmailAndPassword).toHaveBeenCalledWith(
        expect.anything(), 
        'test@example.com',
        'password123'
      );
    });
  });

});
