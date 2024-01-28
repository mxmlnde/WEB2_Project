import React, {useState} from 'react';
import {MapContainer, TileLayer, Marker, Polyline, useMapEvents} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconShadow from 'leaflet/dist/images/marker-shadow.png';

const NewMyMap = ({positionMarker, zoomFactor, onUserMarkerPositionChange, centerPos}) => {
    const position = centerPos;
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

    const MapClickHandler = () => {
        useMapEvents({
            click: (e) => {
                const {lat, lng} = e.latlng;
                setUserMarkerPosition([lat, lng]);
                if (onUserMarkerPositionChange) {
                    onUserMarkerPositionChange([lat, lng]);
                }
            }
        });
        return null;
    };

    return (
        <MapContainer center={position} zoom={zoom} style={{height: '35vh'}}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <MapClickHandler/>
            {positionMarker && <Marker position={positionMarker} icon={defaultIcon}/>}
            {userMarkerPosition && <Marker position={userMarkerPosition} icon={defaultIcon}/>}
            {positionMarker && userMarkerPosition && (
                <Polyline positions={[positionMarker, userMarkerPosition]} color="red"/>
            )}
        </MapContainer>
    );
};

export default NewMyMap;
