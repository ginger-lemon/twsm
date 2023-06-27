// 引入各種要用的 hook 
import React from "react";
import { useState } from "react";
import { ResetStyle } from "./styles/Styled.reset.js";
import { GlobalStyles, StyledContainer,StyledMain } from "./styles/Styled.global.js";
import SearchSection from "./component/search.result.js";
import NavBar from "./component/nav.js";
import AppearMap from "./component/appearmap.js";

export default function App() {
    const [species, setSpecies] = useState('');

    function handleChange(e) {
        const newSpecies = e.target.value;
        if (newSpecies !== species || species !== '') {
            console.log('我現在選到新的香料' + newSpecies);
            setSpecies(newSpecies);
        }
        getInfoData(species);
        getMap
    }

    return (
        <>
            <ResetStyle />
            <GlobalStyles />
            {/* 以下設定 */}
            <StyledContainer>
                <NavBar />
                <StyledMain>
                    <SearchSection 
                        onChange={handleChange}
                        species={species}
                    />
                    <AppearMap
                        species={species}                    
                    />
                </StyledMain>
            </StyledContainer>
        </>
    );
}