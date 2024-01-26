import React, {useEffect, useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup, Polyline} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconShadow from 'leaflet/dist/images/marker-shadow.png';

const MyMap = ({positionMarker, userMarkerPosition, onUserMarkerPositionChange}) => {
    const position = [50.93897590901401, 6.96552001490885]; // Köln 50.93897590901401, 6.96552001490885
    const zoom = 13;

    const defaultIcon = L.icon({
        iconUrl: markerIcon,
        shadowUrl: markerIconShadow,
        iconSize: [25, 41], // Größe des Icons
        iconAnchor: [12, 41], // Punkt des Icons, der mit der Marker-Position korrespondiert
        popupAnchor: [1, -34], // Punkt, von dem das Popup geöffnet wird
        shadowSize: [41, 41] // Größe des Schattens
    });

    const handleUserMarkerDragEnd = (e) => {
        const newPosition = e.target.getLatLng();
        onUserMarkerPositionChange(newPosition);
    };

    return (
        <MapContainer center={position} zoom={zoom} style={{height: '50vh'}}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {positionMarker && (
                <Marker position={positionMarker} icon={defaultIcon} draggable={true}>
                    <Popup>Position Marker</Popup>
                </Marker>
            )}
            {userMarkerPosition && (
                <Marker
                    position={userMarkerPosition}
                    icon={defaultIcon}
                    draggable={true}
                    onDragEnd={handleUserMarkerDragEnd}
                >
                    <Popup>User Marker</Popup>
                </Marker>
            )}
            {userMarkerPosition && positionMarker && (
                <Polyline
                    positions={[positionMarker, userMarkerPosition]}
                    color="blue"
                    weight={2}
                />
            )}
        </MapContainer>
    );
};

export default MyMap;
