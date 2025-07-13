import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';

import { Card } from 'react-bootstrap';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


const MapComponent: React.FC = () => {


    // State to track expanded mode
    const [expanded,setExpanded] = useState(false);


    //Coordinates 

    const position: [number, number] = [1.3521, 103.8198];


    return(
        <>
        {/* Small Map that can click to expand */}
        {!expanded && (

            <div
                style={{ 
                        cursor: 'pointer',
                        height: 200,
                        width: '100%',
                        borderRadius: 8,
                        overflow:'hidden' }}
                onClick={() => setExpanded(true)}
            >

                <MapContainer
                    center={position}
                    zoom = {13}
                    style={{ height: '400px', width: '100%' }}
                    className="w-100"
                >

                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                <Marker position={position}>
                    <Popup>
                        Location.
                    </Popup>

                </Marker>

                </MapContainer>



            </div>

        )}
        
        
        
        </>




    );
};
export default MapComponent;
