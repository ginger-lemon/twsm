import styled from "styled-components";

export const StyledSelect = styled.div`
    position: relative;

    /* 設定 select 樣式 */
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