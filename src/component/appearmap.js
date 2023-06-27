import React from "react";
import { useState, useEffect } from "react";
import { StyledMapContainer } from "../styles/Styled.map.js";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

export default function AppearMap({ species }) {
    const [mapData, setMapData] = useState('');
    // TODO: 用 useEffect 取得資料會有回傳時間太慢的問題
    useEffect(() => {
        // 保留最後一個點選到的選項
        let isSubscibed = true;

        async function getMapData(species) {
            try {
                const response = await fetch(`https://map.tbn.org.tw/geoserver/wfs?request=getFeature&typeName=species:occurrence&CQL_FILTER=scientificname='${species}'&outputformat=json`);
                const data = await response.json();

                if (!isSubscibed) {
                    // 如果該訂閱以因為觸發第二次 Effect 而先被清除
                    // 則中斷執行之前觸發的 Effect 內容
                    return;
                }
                console.log('抓取資料成功');
                console.log(data);
                setMapData(data);
                
            } catch (error) {
                console.error('失敗', error);
            }
        }

        if (species !== '') {
            getMapData(species);
        }

        // 清除函數
        return ()=> {
            isSubscibed = false;
            setMapData('');
        };
        
    },[species]);




    return (
        <StyledMapContainer>
            <MapContainer
            species={species}
            center={[23.697809, 120.960518]} 
            zoom={8} 
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
        </StyledMapContainer>
        
    );
}
