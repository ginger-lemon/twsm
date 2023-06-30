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

    /* 在網頁上固定 */
    position: fixed;

    /* 當螢幕 < 1280px nav 在上方 */
    @media(max-width: 1280px) {
        width: 100vw;
        height: 120px;
        /* 導覽列在最上層 */
        z-index: +1;
        /* 讓元素水平排列 */
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 720px) {
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
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

    /* 螢幕寬度 < 1280px */ 
    @media(max-width: 1280px) {
        margin: 0px;

        a {
            display: inline-block;
            width: 175px;
            height: 65px;
            /* border: 1px solid blue; */
            margin-bottom: 0;
            margin-left: 60px;
            background-image: url("../src/img/logo-phone.svg");
            background-repeat: no-repeat;
        }

        &::after{
            display: none;
        }

        img {
            display: none;
        }
    }

    @media (max-width: 720px) {
        a {
            width: 146px;
            height: 54px;
            background-image: url("../src/img/logo-phone.svg");
            background-repeat: no-repeat;
            margin-left: 45px;
        }
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

    img {
        width: 60px;
        height: 60px;
    }

    /* 螢幕寬度 < 1280px */ 
    @media(max-width: 1280px) {
        margin: 0;
        display: flex;
        align-items: center;
        a {
            display: inline-block;
            margin-right: 60px;
        }
    }

    @media (max-width: 720px) {
        margin: 0;
        font-size: 18px;
        align-items: center;
        a {
            margin-right: 30px;
        }
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

    /* 當螢幕寬度 < 1280px  */
    @media (max-width: 1280px) {
        display: none;
    }
`;