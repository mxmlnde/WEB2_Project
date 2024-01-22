import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconShadow from 'leaflet/dist/images/marker-shadow.png';


const MyMap = () => {
    // Setzen Sie den Anfangsstandort und Zoom-Level
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


    return (
        <MapContainer center={position} zoom={zoom} style={{ height: '50dvh'}}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}  icon={defaultIcon}>
                <Popup>
                    Ein beliebiger Popup-Text. <br /> Zum Beispiel: London.
                </Popup>
            </Marker>
            <Marker position={[50.93897590901401, 7.96552001490885]}  icon={defaultIcon}>
                <Popup>
                    Ein beliebiger Popup-Text. <br /> Zum Beispiel: London.
                </Popup>
            </Marker>
            <Polyline positions={[position, [50.93897590901401, 7.96552001490885]]} />
        </MapContainer>
    );
};

export default MyMap;
