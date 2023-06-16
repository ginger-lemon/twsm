// 引入各種要用的 hook 
import React from "react";
import { ResetStyle } from "./styles/Styled.reset.js";
import { GlobalStyles, StyledContainer,StyledMain } from "./styles/Styled.global.js";
import SearchSection from "./component/search.result.js";
import NavBar from "./component/nav.js";
import AppearMap from "./component/appearmap.js";

export default function App() {
    return (
        <>
            <ResetStyle />
            <GlobalStyles />
            {/* 以下設定 */}
            <StyledContainer>
                <NavBar />
                <StyledMain>
                    <SearchSection/>
                    <AppearMap/>
                </StyledMain>
            </StyledContainer>
        </>
    );
}