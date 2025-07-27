import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MapComponent from '@/views/hotels/HotelDetails/components/HotelMaps';
import '@testing-library/jest-dom';

// 1) Missing coords → error UI
test('renders error when latitude or longitude is null', () => {
  // latitude missing
  const { rerender } = render(
    <MapComponent latitude={null as any} longitude={103.8} address="Foo St" />
  );
  expect(screen.getByText(/Map failed to load/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Return to Hotels/i })).toBeInTheDocument();

  // longitude missing
  rerender(
    <MapComponent latitude={1.3} longitude={undefined as any} address="Foo St" />
  );
  expect(screen.getByText(/Map failed to load/i)).toBeInTheDocument();
});

// 2) Valid coords → normal map UI
test('renders map container and address when coords are present', () => {
  render(<MapComponent latitude={1.3521} longitude={103.8198} address="123 Orchard Rd" />);

  // The address text should show up
  expect(screen.getByText(/123 Orchard Rd/i)).toBeInTheDocument();

  // The Leaflet container has class 'leaflet-container'
  const leafletDiv = document.querySelector('.leaflet-container');
  expect(leafletDiv).toBeInTheDocument();
});

// 3) Expanded flow: clicking “View Larger Map” shows the overlay
test('expands overlay when view larger map is clicked', () => {
  render(<MapComponent latitude={1.3521} longitude={103.8198} address="123 Orchard Rd" />);
  const viewBtn = screen.getByRole('button', { name: /View Larger Map/i });
  fireEvent.click(viewBtn);

  // Now we should see the Close X button in the overlay
  expect(screen.getByRole('button', { name: /X Close/i })).toBeInTheDocument();
});
