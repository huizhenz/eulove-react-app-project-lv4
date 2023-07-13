import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'SpoqaHanSansNeo-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
body{
    font-family: 'SpoqaHanSansNeo-Regular';
    width: 1300px;
    color: #ffffff;
    background-color: #181818;
    margin: 0 auto;
}
`;

export default GlobalStyle;
