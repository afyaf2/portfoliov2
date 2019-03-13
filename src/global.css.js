import { createGlobalStyle } from 'styled-components';
import { accent, black, lightblue } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';
import './fonts/fonts.css';

export default createGlobalStyle`

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    width: 100vw;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    line-height: 1;
    font-size: 1.6rem;
    color: ${black};
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: ${accent};
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: ${accent};
    border: 1px solid #ddd;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }

  video {
    max-width: 100%;
  }

  p {
    margin-bottom: 2rem;
  }

  /* Font Styles */

  h1, h2 {
    font-family: "Futura-Heavy", sans-serif;
  }

  h3, h4 {
    font-family: "Futura-Medium", sans-serif;
  }

  h5 {
    font-family: "Sans-Serif-Shaded", sans-serif;
  }

  h6 {
    font-family: "Trueno-Bd", sans-serif;
  }

  ul>li, p {
    font-family: "Trueno-Rg", sans-serif
  }

  a, svg * {
    transition: 0.3s all ease;
  }

  .page-title {
    text-align: center;
    padding: 5rem 0;

    h1 {
      font-size: 5rem;
    }
    em {
      position: relative;
      max-width: min-content;
    }

    em::after {
      border: none;
      z-index: -1;
      position: absolute;
      top: 35px;
      left: -2px;
      content: '';
      height: 35%;
      width: 105%;
      background: ${lightblue};
      opacity: 0.5
    }
  }
  ${MEDIA.MIN_DESKTOP`
    .rw-break {
      display: none
    }
  `}
`;
