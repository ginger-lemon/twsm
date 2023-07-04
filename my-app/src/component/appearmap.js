import React from "react";
import { StyledMapContainer } from "../styles/Styled.map.js";
import { MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

export default function AppearMap({ mapData, isLoading }) {

    if (isLoading) {
        return (
            <StyledMapContainer>
                <div className="loading">
                    <p>地圖資料讀取中⋯⋯</p>
                    <img src="../src/img/loading.svg"/>
                </div>
                <MapContainer
                center={[23.697809, 120.960518]} 
                zoom={8} 
                scrollWheelZoom={false}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                </MapContainer>
            </StyledMapContainer>
        );
    } else if (mapData) {
        return (
            <StyledMapContainer>
                <MapContainer
                center={[23.697809, 120.960518]} 
                zoom={8} 
                scrollWheelZoom={false}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                        <MarkerClusterGroup>
                            {mapData && mapData.features.map((feature, index) => (
                                <Marker 
                                    key={index} 
                                    position={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]}
                                    >
                                    <Popup>
                                        {"你可以在這裡看到：" + [feature.properties.lat, feature.properties.lng]}
                                    </Popup>
                                </Marker>
                            ))}
                        </MarkerClusterGroup>
                </MapContainer>
            </StyledMapContainer>
        );
    }

    return (
        <StyledMapContainer>
            <MapContainer
            center={[23.697809, 120.960518]} 
            zoom={8} 
            scrollWheelZoom={false}
        >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer>
        </StyledMapContainer>
    );
}
