import styled from "styled-components";


export const FixedTexts = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
    img {
        width: 120px;
        height: 120px;
        border-radius: 25px;
    }

    div {
        margin-left: 30px;
        display: inline-block;
    }

    div p:first-child {
        margin: 8px 0px;
        font-weight: bold;
    }
`;

export const CardContent = styled.div`
    margin: 30px;
`;

export const RowTexts = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 10px;

    p:nth-of-type(1) {
        display: inline-block;
        width: 15%;
    }

    p:nth-of-type(2) {
        display: inline-block;
        width: 85%;
    }

    /* display: none; */
`;

export const StyledMoreInfoCard = styled.div`
    margin-top: 30px;
    position: relative;
    /* 卡片外觀開始 */
    .infocard {
        background-color: #ffffff;
        border: 1px solid #000000;
        border-radius: 10px;
        width: 510px;
    }

    button {
        width: 48px;
        height: 48px;
        background-color: #ffffff;
        border: 1px solid #000000;
        border-radius: 24px;
        position: absolute;
        right: -20px;
        top: -20px;
        cursor: pointer;
    }

    button > img {
        width: 30px;
        height: 30px;
    }
`;

export const Tag = styled.div`
    background-color: #188216;
    border-radius: 12px;
    padding: 6px 35px;
    font-size: 20px;
    line-height: 1.2em;
    color: #ffffff;
    margin-right: 20px;
    display: inline-block;
`;

export const StyledBasicInfoCard = styled.div`
    margin-top: 30px;

    p:nth-of-type(1) {
        /* 學名 */
        font-size: 24px;
        line-height: 29px;
        color: #489688;
        font-weight: lighter;
        font-style: italic;
    }

    p:nth-of-type(2) {
        /* 香料名稱 */
        font-size: 48px;
        line-height: 58px;
        color: #2C655B;
        font-weight: bold;
        position: relative;
    }

    p:nth-of-type(2)::after {
        content: '';
        border: 1px solid #5c5c5c;
        width: 448px;
        position: absolute;
        left: 0px;
        top: 75px;
    }

    .tags-block {
        margin-top: 30px;
    }

    p:nth-of-type(3) {
        /* 香料物種階層 */
        margin-top: 35px;
    }

    p:nth-of-type(4) {
        /* 別稱（英文）部分 */
        margin-top: 30px;
    }
`;

export const StyledSelect = styled.div`
    position: relative;

    select {
        /* 刪除預設 select 樣式 */
        -moz-appearance:none; 
        -webkit-appearance:none;
        appearance: none;

        /* 基本尺寸與外框設定 */
        width: 360px;
        height: 60px;
        background-color: #ffffff;
        border: 3px solid #000000;
        border-radius: 10px;
        /* 文字設定 */
        font-size: 20px;
        line-height: 1.2em;
        color: #5c5c5c;
        padding-left: 30px;
        align-content: conter;

        /* 滑鼠按到會出現手 */
        cursor: pointer;
    }

    &::after {
        /* 讓 after 不會接受到滑鼠的事件 */
        pointer-events: none;
        content: '▾'; 
        font-size: 60px;
        color: #5c5c5c;
        position: absolute;
        top: -8px;
        left: 300px;
    }
`;

export const StyledSearchResult = styled.div`
    /* width: 45%; */
    /* margin-right: 60px; */
`;

