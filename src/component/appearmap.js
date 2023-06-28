import React from "react";
import { StyledMapContainer } from "../styles/Styled.map.js";
import { MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";


export default function AppearMap({ species, mapData, isLoading }) {

    if (species !== '') {
        if (isLoading) {
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
    }

    // 檢查是否收到 API 回傳的 mapData 
    if (species !== '') {
        if (!mapData) {
            console.log('還在等資料傳回來');
        }    
    }

    // 如果已經確定收到 API 回傳的 mapData 
    if (mapData) {
        const { features } = mapData;

        return (
            <StyledMapContainer>
                <MapContainer
                center={[23.697809, 120.960518]} 
                zoom={8} 
                scrollWheelZoom={true}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <MarkerClusterGroup chunkedLoading>
                {features.map((feature, i) => (
                    <Marker 
                        key={i} 
                        position={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]}
                        // title={address[2]}
                        // icon={customIcon}
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
