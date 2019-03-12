import styled from 'styled-components';
import { lightblue, orange } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const MondrianGrid = styled.div`
  display: grid;
  grid-template-columns:
    minmax(25px, 15%) minmax(300px, 1fr)
    10px 0.25fr minmax(400px, 1fr) minmax(25px, 15%);
  grid-template-rows:
    10px minmax(300px, 0.4fr) 50px
    0.25fr 10px 0.3fr 0.2fr;

  h2 {
    font-size: 3rem;
  }

  .line-top {
    grid-column: 1/6;
    background: ${lightblue};
  }

  .picture {
    grid-column: 2;
    grid-row: 2;
    background: ${orange};
    display: flex;
    min-width: 300px;
    min-height: 300px;
    .gatsby-image-wrapper {
      border-radius: 100%;
      margin: auto
    }
  }

  .icons {
    grid-column: 2;
    grid-row: 3/7;
    display: flex;
    flex-direction: column;
    text-align: center;
    .icon-row {
      margin: auto;
    }
    .icon-row.Tech {
      width: 50%;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }

  .color-block {
    grid-column: 4;
    background: ${lightblue};
    grid-row: 2/4;
  }

  .links-col {
    padding: 10px;
    h2 {
      font-size: 2.5rem;
      padding-bottom: 5px;
    }
    grid-column: 4;
    grid-row: 4;
    border-right: 10px solid ${lightblue};
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      padding-bottom: 5px;
      width: 50px;
      text-align: center;
      svg {
        width: 25px;
        height: 25px;
      }
      &:hover {
        svg * {
          fill: ${orange}
        }
      }
    }
  }
  .vertical-line {
    grid-column: 3;
    grid-row: 2/8;
    background: ${lightblue};
  }

  .line-bottom {
    grid-column: 4 / 7;
    grid-row: 5;
    background: ${lightblue};
  }

  .about-content {
    grid-column: 5;
    padding: 1.75rem 2rem;
    grid-row: 2/5;
    p {
      margin-bottom: 1.75rem;
      font-size: 14px;
      line-height: 1.5;
    }
  }
  .cta-button {
    display: flex;
    background: ${orange};
    grid-column: 4 / 6;
    grid-row: 6;
    a {
      color: white;
      text-decoration: none;
      opacity: 0.5;
      margin: auto;
      font-family: 'Futura-Heavy', sans-serif;
      font-size: 36px;
      &:hover {
        opacity: 1
      }
    }
  }
  ${MEDIA.TABLET`
    display: grid;
    height: unset;
    grid-template-rows: repeat(auto-fit, minmax(250px,1fr));
    grid-template-columns: repeat(auto-fit, minmax(80vw,1fr));
    .about-content, .cta-button, .picture, .icons, .links-col {
      grid-column: 1
    }
    .color-block, .vertical-line, .line-top, .line-bottom {
      display: none
    }
    .picture {
      grid-row: 1
    }
    .links-col {
      padding: 25px;
      background: ${lightblue};
      grid-row: 2;
      flex-direction: row;
      justify-content: center;
      h2 {
        display: none
      }
      a {
        padding-bottom: 0;
        svg g {
          fill: white;
          opacity: 0.99
        }
      }
    }
    .icons {
      grid-row: 3;
      .icon-row.Tech {
        width: 54%
      }
      .icon-row.Tools {
        width: 45%;
        display: flex;
        justify-content: space-around
      }
      svg {
        padding: 5px 2.5px
      }
      #webpack {
        padding: 5px 0;
        margin-right: -11px
      }
    }
    .about-content {
      grid-row: unset
    }
  `}
`;
