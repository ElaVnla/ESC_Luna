import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import VerifyEmail from '@/views/hotels/Feature4/flow1/VerifyEmail/components/TwoFactorAuth';  // Ensure correct import
import { Wizard } from 'react-use-wizard';  // Import the Wizard component
import '@testing-library/jest-dom';

// Mock the '@/states' module to include 'currentYear' and any other needed values
vi.mock('@/states', () => ({
  currentYear: '2025', // Mock currentYear to return a value
  developedByLink: 'https://example.com',
}));

// Mock sessionStorage
beforeAll(() => {
  global.sessionStorage.setItem('hotel_guest_info', JSON.stringify({
    customer: { email: 'test@example.com' }
  }));
});

// Mock API responses
const mockSendOTP = vi.fn();
const mockVerifyOTP = vi.fn();

// Mock global fetch
global.fetch = vi.fn((url, options) => {
  // Mock response for sending OTP
  if (url === 'http://localhost:3000/email/send-otp') {
    mockSendOTP();
    return Promise.resolve(new Response(
      JSON.stringify({}),
      {
        status: 200,
        statusText: 'OK',
        headers: new Headers({ 'Content-Type': 'application/json' }),
      }
    ));
  }

  // Mock response for verifying OTP
  if (url === 'http://localhost:3000/email/verify-otp') {
    mockVerifyOTP();
    const responseBody = options.body && options.body.includes('12345') 
      ? { verified: true }
      : { message: 'Invalid code' };

    const response = new Response(
      JSON.stringify(responseBody),
      {
        status: responseBody.verified ? 200 : 400,
        statusText: responseBody.verified ? 'OK' : 'Bad Request',
        headers: new Headers({ 'Content-Type': 'application/json' }),
      }
    );

    return Promise.resolve(response);
  }

  // Return an error response for any other unknown request
  return Promise.reject('Unknown API request');
});

describe('VerifyEmail - OTP Flow', () => {
  test('should send OTP and verify correctly when OTP is valid', async () => {
    render(
      <Wizard>
        <VerifyEmail />
      </Wizard>
    );

    // Simulate entering OTP values
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: '1' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: '2' } });
    fireEvent.change(screen.getAllByRole('textbox')[2], { target: { value: '3' } });
    fireEvent.change(screen.getAllByRole('textbox')[3], { target: { value: '4' } });
    fireEvent.change(screen.getAllByRole('textbox')[4], { target: { value: '5' } });

    // Click verify button
    fireEvent.click(screen.getByText('Verify and proceed'));

    // Wait for the verification result
    await waitFor(() => {
      expect(mockVerifyOTP).toHaveBeenCalled();
      expect(screen.getByText('OTP sent successfully!')).toBeInTheDocument();
    });
  });

  test('should show error message when OTP is invalid', async () => {
    render(
      <Wizard>
        <VerifyEmail />
      </Wizard>
    );

    // Simulate entering incorrect OTP values
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: '6' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: '7' } });
    fireEvent.change(screen.getAllByRole('textbox')[2], { target: { value: '8' } });
    fireEvent.change(screen.getAllByRole('textbox')[3], { target: { value: '9' } });
    fireEvent.change(screen.getAllByRole('textbox')[4], { target: { value: '0' } });

    // Click verify button
    fireEvent.click(screen.getByText('Verify and proceed'));

    // Wait for the verification result and check for the error message
    await waitFor(() => {
      expect(mockVerifyOTP).toHaveBeenCalled();
      expect(screen.getByText('Invalid code')).toBeInTheDocument();  // Check for the error message directly
    });
  });

  test('should resend OTP when clicked on "Click to resend"', async () => {
    render(
      <Wizard>
        <VerifyEmail />
      </Wizard>
    );

    // Simulate clicking resend button
    fireEvent.click(screen.getByText('Click to resend'));

    // Ensure resend OTP is triggered
    await waitFor(() => {
      expect(mockSendOTP).toHaveBeenCalled();
    });
  });
});
