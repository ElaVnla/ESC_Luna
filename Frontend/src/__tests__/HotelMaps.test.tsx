import { vi } from 'vitest';

// Do Mocks so vitest do not load real assets:

// 1) CSS and images
vi.mock('leaflet/dist/leaflet.css',      () => ({ default: '' }));
vi.mock('leaflet/dist/images/marker-icon-2x.png', () => ({ default: 'markerIcon2x' }));
vi.mock('leaflet/dist/images/marker-icon.png',    () => ({ default: 'markerIcon' }));
vi.mock('leaflet/dist/images/marker-shadow.png',  () => ({ default: 'markerShadow' }));

// 2) Leaflet itself
vi.mock('leaflet', () => {
  const Icon = {
    Default: {
      prototype: { _getIconUrl: undefined },
      mergeOptions: vi.fn(),
    },
  };
  return {
    __esModule: true,
    default: { Icon },
    Icon,
  };
});

// 3) react‑leaflet primitives
vi.mock('react-leaflet', () => ({
  MapContainer:(props: any) => <div data-testid="map-container" {...props} />,
  TileLayer:(props: any) => <div data-testid="tile-layer"   {...props} />,
  Marker:(props: any) => <div data-testid="marker"       {...props} />,
  useMap:() =>({}),
  useMapEvent:()=> {},
}));

// 4) MapController
vi.mock(
  '@/views/hotels/HotelDetails/controllers/MapController',
  () => ({
    MapController: vi.fn().mockImplementation(() => ({
      handleMove: vi.fn(() => false),
      recenterMap: vi.fn(),
    })),
  })
);

// 5) react‑bootstrap
vi.mock('react-bootstrap', () => {
  const Card: any = ({ children, ...p }: any) => <div data-testid="card" {...p}>{children}</div>;
  Card.Body = ({ children, ...p }: any) => <div data-testid="card-body" {...p}>{children}</div>;
  Card.Text = ({ children, ...p }: any) => <div data-testid="card-text" {...p}>{children}</div>;

  return {
    Button: ({ children, ...p }: any) => <button data-testid="button" {...p}>{children}</button>,
    Card,
  };
});

// 6) React Icons
vi.mock('react-icons/bs', () => ({
  BsEyeFill: () => <span data-testid="eye-icon" />,
  BsGeoAlt:  () => <span data-testid="geo-icon" />,
}));

// import render and Mapcomponent
import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import MapComponent from '@/views/hotels/HotelDetails/components/HotelMaps';

describe('HotelMaps', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    Object.defineProperty(document.body, 'style', {
      value: { overflow: '' },
      writable: true,
    });
  });

  // Normal Render test with crashing
  it('renders without crashing', () => {
    render(<MapComponent latitude={1.3521} longitude={103.8198} address="Test Address" />);
  });

  // Remder error message when coordinates have null values
  it('renders error message when coordinates are null', () => {
    const { getByText } = render(
      <MapComponent latitude={null as any} longitude={null as any} address="Test Address" />
    );
    expect(getByText('Map failed to load.')).toBeInTheDocument();
  });
  // render map with valuid coordinates
  it('renders map with valid coordinates', () => {
    const { getByTestId } = render(
      <MapComponent latitude={1.3521} longitude={103.8198} address="123 Test Street" />
    );
    expect(getByTestId('map-container')).toBeInTheDocument();
    expect(getByTestId('marker')).toBeInTheDocument();
  });
});
