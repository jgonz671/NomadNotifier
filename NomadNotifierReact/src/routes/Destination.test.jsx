import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Destination from './Destination'; 

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), 
  useNavigate: jest.fn(),
  useLocation: () => ({
    state: { people: 1 },
  }),
}));

jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn().mockReturnValue({}),
  collection: jest.fn(),
  query: jest.fn(),
  getDocs: jest.fn().mockResolvedValue({
    docs: [
      {
        id: '1',
        data: () => ({ city: 'Test City', country: 'Test Country' }),
      },
    ],
  }),
}));

jest.mock("../firebase", () => ({
  app: jest.fn().mockReturnValue({
  }),
}));

describe('Destination', () => {
  test('renders without crashing', async () => {
    render(<Destination />);
    expect(await screen.findByText('Where would you like to visit?')).toBeInTheDocument();
    expect(await screen.findByLabelText('Select a destination:')).toBeInTheDocument();
  });
});
