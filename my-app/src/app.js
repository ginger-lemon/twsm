import React, { useState, useEffect } from "react";
import { ResetStyle } from "./styles/Styled.reset.js";
import { GlobalStyles, StyledContainer,StyledMain, StyledRWDFooter } from "./styles/Styled.global.js";
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
            setSpecies(newSpecies);
        } 
    }

    // 處理連線到模擬 API 請求邏輯
    async function fetchInfoData(value) {
        try {
            const data = await fetchData(value);
            setInfoData(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        let isSubscirbed = true;
        fetchInfoData(species);
        return () => {
            isSubscirbed = false;
            setInfoData('');
        }
    }, [species]);

    // 處理連線到第三方 API 取得地圖資料的邏輯
    async function fetchMapData(value) {
        if (species !== '') {
            setIsLoading(true);
            try {
                const response = await fetch(`https://map.tbn.org.tw/geoserver/wfs?request=getFeature&typeName=species:occurrence&CQL_FILTER=scientificname='${value}'&outputformat=json`);
                const data = await response.json();
                setMapData(data);
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false);
            }
        } else {
            setMapData('');
        }
    }

    useEffect(() => {
        let isSubscirbed = true;
  
            fetchMapData(species);

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
                    <StyledRWDFooter>
                        <p>© 2023 GingerLemon.</p>
                    </StyledRWDFooter>
                </StyledMain>
            </StyledContainer>
        </>
    );
}