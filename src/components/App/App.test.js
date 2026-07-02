import { render, screen } from '@testing-library/react';
import App from './App';

test('renders shopping cart text', () => {
  render(<App />);
  const cartElement = screen.getByText(/Shopping cart/i);
  expect(cartElement).toBeInTheDocument();
});
