import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconShadow from 'leaflet/dist/images/marker-shadow.png';
import locations from '../documents/locations.json';

const MyMap = ({ positionMarker, zoomFactor, onUserMarkerPositionChange, centerPos}) => {
    const position = centerPos; // Default-Zentrum: Köln
    const zoom = zoomFactor;
    const [userMarkerPosition, setUserMarkerPosition] = useState(null);

    const defaultIcon = L.icon({
        iconUrl: markerIcon,
        shadowUrl: markerIconShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    // Funktion, die auf Kartenklicks reagiert und einen Marker platziert
    const MapClickHandler = () => {
        useMapEvents({
            click: (e) => {
                const { lat, lng } = e.latlng;
                setUserMarkerPosition([lat, lng]);
                // Rückgabe der Position des Benutzermarkers an die übergeordnete Komponente
                if (onUserMarkerPositionChange) {
                    onUserMarkerPositionChange([lat, lng]);
                }
            }
        });
        return null;
    };

    return (
        <MapContainer center={position} zoom={zoom} style={{ height: '35vh' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <MapClickHandler />
            {positionMarker && <Marker position={positionMarker} icon={defaultIcon} />}
            {userMarkerPosition && <Marker position={userMarkerPosition} icon={defaultIcon} />}
            {positionMarker && userMarkerPosition && (
                <Polyline positions={[positionMarker, userMarkerPosition]} color="red" />
            )}
        </MapContainer>
    );
};

export default MyMap;
