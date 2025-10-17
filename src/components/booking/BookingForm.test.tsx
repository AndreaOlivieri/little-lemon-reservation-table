import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  const availableTimes = { availableTimes: ['17:00', '18:00'] };

  test('renders form fields and time options', () => {
    const dispatchMock = jest.fn();
    const submitMock = jest.fn();

    render(<BookingForm availableTimes={availableTimes} dispatch={dispatchMock} submitForm={submitMock} />);

    // Labels and inputs
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();

    // Time options: include the placeholder + provided times
    const timeSelect = screen.getByLabelText(/choose time/i) as HTMLSelectElement;
    expect(timeSelect.options.length).toBe(1 + availableTimes.availableTimes.length);
    expect(Array.from(timeSelect.options).map((o) => o.value)).toEqual(['', '17:00', '18:00']);
  });

  test('updates inputs, dispatches date change and calls submitForm on submit', async () => {
    const dispatchMock = jest.fn();
    const submitMock = jest.fn();
    const user = userEvent.setup();

    render(<BookingForm availableTimes={availableTimes} dispatch={dispatchMock} submitForm={submitMock} />);

    const dateInput = screen.getByLabelText(/choose date/i) as HTMLInputElement;
    const timeSelect = screen.getByLabelText(/choose time/i) as HTMLSelectElement;
    const guestsInput = screen.getByLabelText(/number of guests/i) as HTMLInputElement;
    const occasionSelect = screen.getByLabelText(/occasion/i) as HTMLSelectElement;
    const submitButton = screen.getByRole('button', { name: /on click/i });

    // Change date -> should call dispatch with the new value
    fireEvent.change(dateInput, { target: { value: '2025-10-20' } });
    expect(dispatchMock).toHaveBeenCalledWith('2025-10-20');

    // Select a time
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    expect(timeSelect.value).toBe('18:00');

    // Change guests
    fireEvent.change(guestsInput, { target: { value: '4' } });
    expect(guestsInput.value).toBe('4');

    // Change occasion
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
    expect(occasionSelect.value).toBe('Birthday');

    // Submit form -> submitMock should be called
    await user.click(submitButton);
    expect(submitMock).toHaveBeenCalled();
  });
});
