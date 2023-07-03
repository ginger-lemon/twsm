import styled from "styled-components";

export const FixedTexts = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
    
    @media (max-width: 720px) {
        flex-direction: column;
    }

    img {
        width: 120px;
        height: 120px;
        border-radius: 25px;

        @media (max-width: 720px) {
            margin: auto;
        }
    }

    div {
        margin-left: 30px;
        display: inline-block;

        @media (max-width: 720px) {
            margin-left: 0;
        }
    }

    div p:first-child {
        margin: 8px 0px;
        font-weight: bold;
    }

`;

// 包裹整個卡片部分的內容
export const CardContent = styled.div`
    margin: 30px;

    @media (max-width: 720px) {
        margin: 24px;
    }
`;

// 特性、特徵、應用的基本元件
export const RowTexts = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 10px;

    p:nth-of-type(1) {
        display: inline-block;
        width: 15%;
        font-weight: bold;
    }

    p:nth-of-type(2) {
        display: inline-block;
        width: 85%;
    }

    @media (max-width: 720px){
        display: block;
        
        p:nth-of-type(1) {
            width: 100%;
            padding-bottom: 6px;
            font-weight: bold;
        }

        p:nth-of-type(2) {
            width: 100%;
        }
        

    }
`;

// 資訊卡部分（可以收合的整個部分）
export const StyledMoreInfoCard = styled.div`
    margin-top: 30px;
    position: relative;
    /* 卡片外觀開始 */
    .infocard {
        background-color: #ffffff;
        border: 1px solid #000000;
        border-radius: 10px;
        width: 510px;

        @media (max-width: 720px) {
            width: 320px;
        }
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
    flex: none;
    background-color: #188216;
    border-radius: 12px;
    padding: 6px 35px;
    font-size: 20px;
    line-height: 1.2em;
    color: #ffffff;
    margin-right: 20px;
    display: inline-block;

    @media (max-width: 720px) {
        font-size: 18px;
    }
`;

// 上半部資訊部分（沒有卡片的）
export const StyledBasicInfoCard = styled.div`
    margin-top: 30px;

    p:nth-of-type(1) {
        /* 學名 */
        font-size: 24px;
        line-height: 1.2em;
        color: #489688;
        font-weight: lighter;
        font-style: italic;

        @media (max-width: 720px) {
            font-size: 20px;
        }
    }

    p:nth-of-type(2) {
        /* 香料名稱 */
        font-size: 48px;
        line-height: 1.2em;
        color: #2C655B;
        font-weight: bold;
        position: relative;

        @media (max-width: 720px) {
            font-size: 32px;
        }
    }

    p:nth-of-type(2)::after {
        content: '';
        border: 1px solid #5c5c5c;
        width: 448px;
        position: absolute;
        left: 0px;
        top: 75px;

        @media (max-width: 720px) {
            width: 325px;
            top: 52px;
        }
    }

    .tags-block {
        margin-top: 30px;
    }

    p:nth-of-type(3),
    p:nth-of-type(4) {
        margin-top: 30px;

        @media (max-width: 720px) {
            margin-top: 20px;
        }
    }

`;

// 下拉式選單
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

        @media (max-width: 720px) {
            width: 300px;
            height: 50px;
            font-size: 18px;
        }
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

        @media (max-width: 720px) {
            left: 250px;
            top: -14px;
        }
    }
    

    
`;

// 整個搜尋與資訊欄位的部分
export const StyledSearchResult = styled.div`
    width: 510px;

    @media (max-width: 720px) {
        width: 320px
    }

`;

