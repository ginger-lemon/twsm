import styled from "styled-components";

export const StyledNav = styled.nav`
    /* 關閉繼承的 flex 設定避免壓縮寬度 */
    flex: none;
    /* 以下設定 nav 樣式 */
    background-color: #ffffff;
    border: 2px solid #000000;
    width: 180px;
    height: 100vh;
    display: block;
    text-align: center;
    /* copyright 定位 */
    position: relative;
`;

export const Logo = styled.div`
    /* 定位 */
    margin-top: 60px;
    position: relative;

    &:after {
        content: '';
        display: block;
        width: 75px;
        border: 1px solid #5C5C5C;
        position: absolute;
        top: 151px;
        left: 50px;
    }

    img {
        width: 96px;
        height: 132px;
        text-align: center;
    }

`;


export const StyledTabs = styled.div`
    font-size: 20px;
    line-height: 1.2em;
    /* 定位 */
    margin-top: 42px;
    a {
        display: block;
        color: #000000;
        text-decoration: none;
        margin-bottom: 10px;
    }

    a:hover {
        color: #5C5C5C;
    }
`;

export const StyledFooter = styled.div`
    position: absolute;
    bottom: 20px;
    left: 25px;
    p {
        font-size: 13px;
        text-align: center;
    }
`;