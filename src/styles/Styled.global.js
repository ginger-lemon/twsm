import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const StyledRWDFooter = styled.div`
    display:none;

    @media (max-width: 1280px) {
        display:block;

        p {
            font-size: 13px;
            text-align: center;
        }
    }
`;


export const StyledMain = styled.main`
    /* 讓 main 內部如有複數元件橫向定位 */
    display: flex;
    /* width: 1100px; */
    padding-left: 182px;
    margin: 60px auto;
    gap: 60px;

    /* 最大寬度 < 1280px 時垂直排列 */
    @media(max-width: 1280px) {
        display: flex;
        flex-direction: column;
        margin: 182px auto 60px;
        padding: 0px;
    }

    @media(max-width: 720px) {
        display: flex;
        flex-direction: column;
        margin: 120px auto 60px;
        padding: 0px;
    }
`;

export const StyledContainer = styled.div`
    /* 讓 nav 與 main 橫向排列 */
    display: flex;
    flex-direction: row;
    gap: 30px;
    
    @media (max-width) {
        position:relative;
    }
`;

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: 'Noto Sans TC', sans-serif;
    }

    body {
        background-color: #F8F6F4;
    }

    p {
        font-size: 20px;
        line-height: 1.2em;
        font-weight: normal;
        color: #5C5C5C;

        @media (max-width: 720px) {
            font-size: 18px;
        }
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style-type:none;
    }
`;

