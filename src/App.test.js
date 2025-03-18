import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Joey Pinaroc/i);
  expect(linkElement).toBeInTheDocument();
});
