import React, { useState, useEffect } from "react";
import { ResetStyle } from "./styles/Styled.reset.js";
import { GlobalStyles, StyledContainer,StyledMain } from "./styles/Styled.global.js";
import SearchSection from "./component/search.result.js";
import NavBar from "./component/nav.js";
import AppearMap from "./component/appearmap.js";
import { fetchData } from "./data/infoApi.js";

export default function App() {
    const [species, setSpecies] = useState('');
    const [infoData, setInfoData] = useState('');
    const [mapData, setMapData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    // 下拉式選單的事件處理函數
    function handleSpeciesChange(e) {
        const newSpecies = e.target.value;
        if (newSpecies !== species) {
            console.log('我現在選到新的香料' + newSpecies);
            setSpecies(newSpecies);
        }
    }

    // 處理連線到模擬 API 請求邏輯
    async function fetchInfoData(value) {
        try {
            const data = await fetchData(value);
            console.log('已取得模擬API 資料');
            setInfoData(data);
        } catch (error) {
            console.error('模擬 API 發生錯誤：' , error);
        }
    }

    useEffect(() => {
        let isSubscirbed = true;
        if (species !== '') {
            fetchInfoData(species);
        }
        return () => {
            isSubscirbed = false;
            setInfoData('');
        }
    }, [species]);

    // 處理連線到第三方 API 取得地圖資料的邏輯
    async function fetchMapData(value) {
        setIsLoading(true);
        try {
            const response = await fetch(`https://map.tbn.org.tw/geoserver/wfs?request=getFeature&typeName=species:occurrence&CQL_FILTER=scientificname='${value}'&outputformat=json`);
            const data = await response.json();
            setMapData(data);
            console.log('已取得第三方 API 的地圖資料');
        } catch (error) {
            console.error('處理連線到第三方 API 取得地圖資料時發生錯誤：' , error)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        let isSubscirbed = true;
        if (species !== '') {
            fetchMapData(species);
        }
        return () => {
            isSubscirbed = false;
            setMapData({});
        }
    }, [species]);


    return (
        <>
            <ResetStyle />
            <GlobalStyles />
            {/* 以下設定 */}
            <StyledContainer>
                <NavBar />
                <StyledMain>
                    <SearchSection 
                        infoData={infoData}
                        onChange={handleSpeciesChange}
                        species={species}
                        isLoading={isLoading}
                    />
                    <AppearMap
                        isLoading={isLoading}
                        mapData={mapData}                 
                    />
                </StyledMain>
            </StyledContainer>
        </>
    );
}