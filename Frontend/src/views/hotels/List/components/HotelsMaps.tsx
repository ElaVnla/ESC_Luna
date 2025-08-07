 import React, { useState, useEffect, useRef } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from 'react-leaflet';
import type { Marker as LeafletMarker } from 'leaflet';
import { Button, Card } from 'react-bootstrap';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapController } from '../../HotelDetails/controllers/MapController';
import type { HotelsListType, HotelMapProps } from '../utils/HotelTypes';
import { getHotelDetailUrl } from '../utils/HotelNavigation';

// Fix default marker icons
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapEventsHandler: React.FC<{
  initialPosition: [number, number];
  setOffCenter: (v: boolean) => void;
}> = ({ initialPosition, setOffCenter }) => {
  const map = useMap();
  const controller = new MapController(map, initialPosition[0], initialPosition[1]);

  useMapEvent('moveend', () => {
    const moved = controller.handleMove();
    setOffCenter(moved);
  });
  return null;
};

const RecenterButton: React.FC<{
  initialPosition: [number, number];
  show: boolean;
}> = ({ initialPosition, show }) => {
  const map = useMap();
  const controller = new MapController(map, initialPosition[0], initialPosition[1]);

  if (!show) return null;
  return (
    <Button
      onClick={() => controller.recenterMap()}
      variant="primary"
      style={{
        padding: '8px 24px',
        border: 'none',
        zIndex: 3000,
        cursor: 'pointer',
        position: 'absolute',
        bottom: 8,
        background: 'white',
        color: 'black',
        fontWeight: 'bold',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      Re-centre
    </Button>
  );
};

const MapComponent: React.FC<HotelMapProps> = ({
  hotels = [],
  selectedHotel,
  rooms,
  nights,
  forceExpanded,
  onClose,
}) => {
  const [expanded, setExpanded] = useState(forceExpanded ?? false);
  const [offcenter, setOffCenter] = useState(false);

  // map center: use selectedHotel or first hotel or fallback coords
  const centerPosition: [number, number] = selectedHotel
    ? [selectedHotel.latitude ?? 1.3521, selectedHotel.longitude ?? 103.8198]
    : hotels.length > 0
    ? [hotels[0].latitude ?? 1.3521, hotels[0].longitude ?? 103.8198]
    : [1.3521, 103.8198];

  // keep refs for each marker to open popup on selectedHotel
  const markerRefs = useRef<{ [key: string]: LeafletMarker | null }>({});

  const RecenterMapOnHotelChange: React.FC<{ hotel: HotelsListType | null }> = ({ hotel }) => {
    const map = useMap();

        useEffect(() => {
            if (hotel?.latitude && hotel?.longitude) {
            const position: [number, number] = [hotel.latitude, hotel.longitude];
            map.setView(position, map.getZoom(), { animate: true });
            }
        }, [hotel]);

        return null;
    };

  const MarkerWithCenterOnClick: React.FC<{
    hotel: HotelsListType;
    isSelected: boolean;
  }> = ({ hotel, isSelected }) => {
    const position: [number, number] = [hotel.latitude ?? 1.3521, hotel.longitude ?? 103.8198];
    const markerRef = useRef<LeafletMarker | null>(null);
    const map = useMap();

    const getGuestRatingDetails = (score: number) => {
      if (score >= 4.5) return { label: "Excellent", color: "success" };
      if (score >= 4.0) return { label: "Very Good", color: "primary" };
      if (score >= 3.0) return { label: "Average", color: "warning" };
      if (score > 0) return { label: "Poor", color: "danger" };
      return { label: "No Rating", color: "secondary" };
    };

    useEffect(() => {
        if (isSelected) {
        map.setView(position, map.getZoom(), { animate: true });
        markerRef.current?.openPopup();
        }
    }, [isSelected]);

    return (
      <Marker
        position={position}
        ref={(el: LeafletMarker | null) => {
            markerRef.current = el;
            markerRefs.current[hotel.id] = el;
        }}
        eventHandlers={{
          click: () => {
            map.setView(position, map.getZoom(), { animate: true });
            markerRef.current?.openPopup();
          },
        }}
      >
        <Popup closeButton={false}>
          <div
            className="d-flex flex-column"
            style={{ minWidth: '250px', maxWidth: '300px', height: '100%' }}
          >
            {/* Top: Image + Details */}
            <div className="d-flex">
              <img
                src={hotel.images?.[0] || 'https://placehold.co/80x80?text=No+Image'}
                alt="Hotel"
                style={{
                  width: 80,
                  height: 80,
                  objectFit: 'cover',
                  borderRadius: 4,
                  marginRight: 8,
                }}
              />
              <div>
                <strong>{hotel.name}</strong>
                <small className="text-secondary d-block mb-1">{hotel.address}</small>
                <div className="text-warning mb-1">
                  {'★'.repeat(Math.floor(Number(hotel.star_rating)))}
                </div>
                <div className="d-flex align-items-center gap-2">
                  {(() => {
                    const { label, color } = getGuestRatingDetails(Number(hotel.guest_rating));
                    return (
                      <>
                        <span className={`text-${color} fw-bold`}>{label}</span>
                        <span className={`bg-${color} text-white px-2 rounded fw-bold`}>
                          {Number(hotel.guest_rating).toFixed(1)}
                        </span>
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>

            {/* Bottom: Price/Rooms/Nights left, Select Hotel button right */}
            <div
              className="d-flex justify-content-between align-items-center mt-2"
              style={{ marginTop: 'auto' }}
            >
              <div className="text-start">
                <div className="fw-bold">SGD {hotel.price}</div>
                <div style={{ fontSize: '0.875rem' }}>
                  {(rooms ?? 0)} {(rooms ?? 0) > 1 ? "rooms" : "room"} • {(nights ?? 0)} {(nights ?? 0) > 1 ? "nights" : "night"}
                </div>
              </div>

              <div>
                <Button
                  variant="dark"
                  size="sm"
                  onClick={() => {
                    window.location.href = getHotelDetailUrl({ hotel_id: hotel.id.toString() });
                  }}
                >
                  Select Hotel
                </Button>
              </div>
            </div>
          </div>
        </Popup>
      </Marker>
    );
  };

  useEffect(() => {
    setExpanded(forceExpanded ?? false);
  }, [forceExpanded]);

  useEffect(() => {
    if (selectedHotel != null) {
      const selectedMarker = markerRefs.current[selectedHotel.id];
      if (selectedMarker) {
        selectedMarker.openPopup();
      }
    }
  }, [selectedHotel]);

  useEffect(() => {
    if (expanded && selectedHotel && markerRefs.current[selectedHotel.id]) {
      setTimeout(() => {
        try {
          markerRefs.current[selectedHotel.id]?.openPopup();
        } catch (e) {}
      }, 100);
    }
  }, [expanded, selectedHotel]);

  useEffect(() => {
    document.body.style.overflow = expanded ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [expanded]);

  if (!hotels.length) {
    return (
      <Card style={{ borderRadius: 12, padding: 16 }}>
        <Card.Text>Map failed to load.</Card.Text>
        <Button variant="link" onClick={() => window.history.back()}>
          Return to Hotels
        </Button>
      </Card>
    );
  }

  return (
    <>
      {expanded && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              cursor: 'pointer',
              position: 'relative',
              height: '80%',
              width: '80%',
              borderRadius: 16,
              overflow: 'hidden',
            }}
          >
            {onClose && (
              <Button
                variant="primary"
                onClick={onClose}
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  zIndex: 2000,
                  border: 'none',
                  background: 'white',
                  color: 'black',
                }}
              >
                X Close
              </Button>
            )}

            <MapContainer
              center={centerPosition}
              zoom={15}
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom={true}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <RecenterMapOnHotelChange hotel={selectedHotel} />

              {hotels.map((hotel) => (
                <MarkerWithCenterOnClick
                  key={hotel.id}
                  hotel={hotel}
                  isSelected={selectedHotel?.id === hotel.id}
                />
              ))}

              <MapEventsHandler initialPosition={centerPosition} setOffCenter={setOffCenter} />
              <RecenterButton initialPosition={centerPosition} show={offcenter} />
            </MapContainer>
          </div>
        </div>
      )}
    </>
  );
};

export default MapComponent;