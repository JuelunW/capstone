import { render, screen } from '@testing-library/react';
import App from './App';
import Reservations from './components/Reservations';
/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
test('Renders the BookingForm heading', () => {
    render(<Reservations />);
    const headingElement = screen.getByText("Reservations");
    expect(headingElement).toBeInTheDocument();
})
