import { createGlobalStyle } from "styled-components";

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
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style-type:none;
    }
`;