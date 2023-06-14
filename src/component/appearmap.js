import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "../css/map.css";


export default function AppearMap() {
    return (
        <MapContainer
            center={[23.697809, 120.960518]} 
            zoom={8} 
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    );
}
