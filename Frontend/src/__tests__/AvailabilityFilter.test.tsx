/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// ---- Mocks ----
vi.mock('@/components', () => ({
  // Mock TextFormInput to be a plain input field
  TextFormInput: (props: any) => {
    const { label, name, type = 'text', placeholder, className, ...rest } = props;
    return (
      <input
        aria-label={label}
        name={name}
        type={type}
        placeholder={placeholder}
        className={className}
        {...rest}
      />
    );
  },
  PageMetaData: () => null,
}));

// Mock useNavigate so we can assert redirects
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async (importOriginal) => {
  const actual: any = await importOriginal();
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// Component under test
import AvailabilityFilter from '@/views/hotels/Feature4/flow2/VerifyBooking/components/AvailabilityFilter';

// helpers
const fillAndSubmit = async (bookingId: string, email: string) => {
  const idInput = screen.getByLabelText(/booking id/i);
  const emailInput = screen.getByLabelText(/email/i);
  fireEvent.change(idInput, { target: { value: bookingId } });
  fireEvent.change(emailInput, { target: { value: email } });
  fireEvent.click(screen.getByRole('button', { name: /retrieve booking/i }));
};

// reset mocks each test
beforeEach(() => {
  vi.resetAllMocks();
  mockNavigate.mockReset();

  // jsdom has sessionStorage; ensure it's clean
  sessionStorage.clear();
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('AvailabilityFilter (Verify booking)', () => {
  it('shows error when API returns valid:false (soft fail)', async () => {
    // Mocking fetch response to return valid: false
    vi.spyOn(global, 'fetch' as any).mockResolvedValue({
      ok: true,
      json: async () => ({ valid: false }),
    } as any);

    render(<AvailabilityFilter />);

    // Using a valid example input
    await fillAndSubmit('BK-12aug2025-1754987215412-608', 'tonie.enriquez@gmail.com');

    // Wait for the error message to appear
    await waitFor(() => {
      expect(
        screen.getByText(/booking not found\. please check your booking id and email\./i),
      ).toBeInTheDocument();
    });

    // Ensure navigation does not happen
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
