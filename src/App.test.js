import { fireEvent, render, screen } from '@testing-library/react';
import Reservations from './components/Reservations';

test('select a date', () => {
  render(<Reservations />);

  // Get the Date input element
  const dateInput = screen.getByLabelText("Date");

  // Simulate selecting a date
  fireEvent.select(dateInput, { target: { value: '2025-05-01' } });

  // Assert that the date input has the correct value
  expect(dateInput).toHaveValue('2025-05-01');
})
