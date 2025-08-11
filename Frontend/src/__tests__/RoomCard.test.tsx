/* eslint-disable @typescript-eslint/no-explicit-any */
import { vi } from 'vitest';

vi.mock('@/components', () => ({
  TinySlider: ({ children }: any) => <div data-testid="tiny-slider">{children}</div>,
}));

vi.mock('@/hooks', async () => {
  const React = await vi.importActual<typeof import('react')>('react');
  return {
    useToggle: () => {
      const [isOpen, setIsOpen] = React.useState(false);
      return {
        isOpen,
        toggle: () => setIsOpen(prev => !prev),
      };
    },
  };
});

vi.mock('@/states', () => ({
  useLayoutContext: () => ({ dir: 'ltr' }),
}));


vi.mock("react-router-dom", async (importOriginal) => {
  const actual:any = await importOriginal()
  return {
    ...actual,
        Link: ({ children, to, ...props }: any) => <a href={to} {...props}>{children}</a>,
    BrowserRouter: actual.BrowserRouter,
  }
})

import { describe, it, expect} from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RoomCard from '@/views/hotels/HotelDetails/components/RoomCard';
import { testRoomCard1 } from './MockData';


describe('RoomCard Component', () => {
  it('renders room information and responds to interactions', async () => {
    render(
      <BrowserRouter>
        <RoomCard {...testRoomCard1} />
      </BrowserRouter>
    );

    // Heading and amenities
    expect(screen.getByText("Superior Double or Twin Room 2 Twin Beds")).toBeInTheDocument();
    expect(screen.getByText('Air conditioning')).toBeInTheDocument();

    // Price
    expect(screen.getByText('$1236.18')).toBeInTheDocument();
    
    // Message based on room Count
    expect(screen.getByText('Room Selling Fast!')).toBeInTheDocument();

    // "Select Room" button
    const selectBtn = screen.getByRole('button', { name: /select room/i });
    expect(selectBtn).toBeInTheDocument();

    // "View more details" toggles more details popup
    const viewMore = screen.getByText(/view more details/i);
    expect(viewMore).toBeInTheDocument();
    
    // Make sure expanded content is not displayed yet
    expect(screen.queryByText("Room details")).not.toBeInTheDocument()
    
    // CLick Button to expand text
    fireEvent.click(viewMore);
    await waitFor(() =>
      expect(screen.getByText("Room details")).toBeInTheDocument()
    );

    await waitFor(() =>
      expect(screen.getByText("1 Double Bed OR 2 Twin Beds")).toBeInTheDocument()
    );
    // Extra details should only be visible now
    expect(screen.getByRole('dialog'))
    
    
  });
});
