import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* @font-face {
    font-family: 'KBIZHanmaumGothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/KBIZHanmaumGothic.woff') format('woff');
    font-weight: normal;
    font-style: normal;
} */
@font-face {
    font-family: 'SeoulNamsanM';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/SeoulNamsanM.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
body{
    /* font-family: 'KBIZHanmaumGothic'; */
    font-family: 'SeoulNamsanM';
    color: #ffffff;
    background-color: #000000;
}
`;

export default GlobalStyle;
