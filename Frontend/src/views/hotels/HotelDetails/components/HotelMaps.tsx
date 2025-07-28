import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap, useMapEvent } from 'react-leaflet';
import { Button, Card } from 'react-bootstrap'
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { BsEyeFill, BsGeoAlt} from 'react-icons/bs'
import { MapController } from '../controllers/MapController';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


interface HotelMapProps {
  latitude: number;
  longitude: number;
  address: string;
}

const MapEventsHandler: React.FC < {initialPosition: [number,number];setOffCenter: (v: boolean) => void }> = ({
    initialPosition,setOffCenter,}) => {
    
    const map = useMap();
    const controller = new MapController(map,initialPosition[0],initialPosition[1])

    useMapEvent('moveend', () => {
        const moved = controller.handleMove()
        setOffCenter(moved);
    });
    return null;
};

const RecenterButton: React.FC<{initialPosition: [number, number];show: boolean;}> = ({ initialPosition, show }) => {
    const map = useMap()
    const controller = new MapController(map,initialPosition[0],initialPosition[1])

    if (!show) return null;
    return (
        <Button
            onClick={() => controller.recenterMap()}
            variant="primary"
            style={{
                padding: '8px 24px',
                border:'none',
                zIndex: 3000,
                cursor: 'pointer',
                position: 'absolute',   
                bottom: 8,               
                background: 'white',
                color:'black',
                fontWeight: 'bold',
                left: '50%',
                transform: 'translateX(-50%)'
            }}
        >
        Re-centre
        </Button>
        )
    };

const MapComponent: React.FC<HotelMapProps> = ({latitude,longitude,address,}) => {
    // State to track expanded mode
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expanded,setExpanded] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [offcenter,setOffCenter] = useState(false);
    console.log('React:', React);
    console.log('useState:', React?.useState);

    if (latitude == null || longitude == null) {
    return (
      <Card style={{ borderRadius: 12, padding: 16 }}>
        <Card.Text>Map failed to load.</Card.Text>
        <Button variant="link" onClick={() => window.history.back()}>
          Return to Hotels
        </Button>
      </Card>
    );
  }

    //Coordinates 
    const position: [number, number] = [latitude ?? 1.3521, longitude ?? 103.8198];
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {document.body.style.overflow = expanded ? "hidden" : "auto";}, [expanded]);
    return(
        <>
        <Card
            style={{borderRadius: 12, overflow:'hidden'}}>
                
            {/* Small Map that can click to expand */}
            <div style={{ cursor: 'pointer', position: 'relative', height: 200 }}>
                <MapContainer
                    center={position}
                    zoom = {13}

                    style={{ height: '100%', width: '100%',position:'relative' }}
                    scrollWheelZoom={false}
                >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                <Marker position={position} />
                <MapEventsHandler initialPosition={position} setOffCenter={setOffCenter} />
                {!expanded && <RecenterButton initialPosition={position} show={offcenter} />}
                </MapContainer>
            </div>

            <Card.Body>
                
                <Card.Text> <BsGeoAlt className=" me-2" />
                {address}</Card.Text>
                <Button
                variant="primary-soft"
                onClick={() => setExpanded(true)}
                style={{
                    padding: 0,
                    textDecoration: 'underline',
                    background: 'transparent',
                    border:'none'
                }}>
                <BsEyeFill className="me-2"/>
                    View Larger Map
                </Button>
            </Card.Body>
        </Card>
          
        {/* Expanded Map */}
        {expanded && (
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom:0,
                    background:'rgba(0,0,0,0.5)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent:'center'
                }}
            >
            <div
                style={{ 
                        cursor: 'pointer',
                        position: 'relative',
                        height: '80%',
                        width: '80%',
                        borderRadius: 16,
                        overflow:'hidden' }}
            >
                <Button
                    variant="primary"
                    onClick={() => setExpanded(false)}
                    style={{ 
                        cursor: 'pointer',
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        zIndex: 2000,
                        border: 'none',
                        background: 'white',
                        color:'black'
                    }}
                >
                    X Close
                </Button>

                <MapContainer
                    center={position}
                    zoom = {15}
                    style={{ height: '100%', width: '100%' }}
                    scrollWheelZoom={true}
                >

                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position} /> 
                    <MapEventsHandler initialPosition={position} setOffCenter={setOffCenter} />
                    <RecenterButton initialPosition={position} show={offcenter} />    
                </MapContainer>

            </div>
        </div>
        )}
        </>
    );
};
export default MapComponent;
