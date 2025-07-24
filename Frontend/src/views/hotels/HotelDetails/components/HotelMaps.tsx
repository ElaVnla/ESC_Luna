import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap, useMapEvent } from 'react-leaflet';
import { Button, Card } from 'react-bootstrap'

import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { BsEyeFill} from 'react-icons/bs'
import { isOffCenter } from '../utils/MapsUtils';



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

const Recentre: React.FC < {initialPosition: [number,number]}> = ({
    initialPosition
}) => {
    console.log('Recentre mounted');
    const map = useMap();
    const [initLat, initLng] = initialPosition;
    const [offCenter, setOffCenter] = useState(false);

    useMapEvent('moveend', () => {
        const{lat,lng} = map.getCenter();
        console.log('Map moved to:', lat, lng, 'init:', initLat, initLng);
        setOffCenter(isOffCenter(lat, lng, initLat, initLng));
    });

    if (!offCenter){
        return null;
    }

    return (
        <Button
            onClick={() => map.setView(initialPosition,map.getZoom())}
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
    );
};

const MapComponent: React.FC<HotelMapProps> = ({
    latitude,
    longitude,
    address,

    }) => {

    // State to track expanded mode
    const [expanded,setExpanded] = useState(false);

    //Coordinates 
    const position: [number, number] = [latitude ?? 1.3521, longitude ?? 103.8198];
    
    useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "auto";
    }, [expanded]);

    return(
        <>
        <Card
            style={{
                borderRadius: 12,
                overflow:'hidden'
            }}>
            {/* Small Map that can click to expand */}

            <div
                style={{ 
                        cursor: 'pointer',
                        position: 'relative',
                        height: 200 }}
            >
                <MapContainer
                    center={position}
                    zoom = {13}
                    position = 'relative'
                    style={{ height: '100%', width: '100%' }}
                    scrollWheelZoom={false}
                >

                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                <Marker position={position}>


                </Marker>
                    <Recentre initialPosition={position}/>
                </MapContainer>
            </div>

            <Card.Body>
                <Card.Text> {address} </Card.Text>

                <Button
                variant="primary-soft"
                onClick={() => setExpanded(true)}
                style={{
                    padding: 0,
                    textDecoration: 'underline',
                    background: 'transparent',
                    border:'none'

                }}
                >
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
                
                <Marker position={position}>
                    


                </Marker>
                
                    <Recentre initialPosition={position}/>
                </MapContainer>

            </div>
        </div>
        )}
        </>
    );
};
export default MapComponent;
