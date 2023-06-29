import styled from "styled-components";

export const StyledMapContainer = styled.div`
    .leaflet-container {
        width: 520px;
        height: 720px;

    }

    .loading {
        height: 30px;
        display: flex;
        align-items: center;
    }

    .loading p {
        font-size: 18px;
        display: inline-block;
    }

    .loading img {
        width: 18px;
        margin-left: 6px;
        /* 動畫名稱|所需時間|延遲時間|速度 */
        animation: rotate 1.5s linear infinite;
    }
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }


`;