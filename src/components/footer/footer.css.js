import styled from 'styled-components';
import { lightblue, orange } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const FooterBar = styled.nav`
  display: inline-flex;
  background: ${lightblue};
  color: white;
  width: 100vw;
  align-items: center;
  justify-content: space-evenly;
  padding: 2.5rem 0;
  ul {
    width: 33%;
    display: inline-flex;
    justify-content: space-evenly;
    a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.2s ease;
      &:hover {
        color: ${orange};
      }
    }
    li {
      text-transform: uppercase;
      font-size: 1.3rem;

      & + li {
        margin-left: 2rem;
      }
    }
    ${MEDIA.TABLET`
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 7.5rem;
      li {
        width: min-content;
        margin-left: 0
      }
    `}
  }
  svg * {
    fill: white
  }
`;

export const FooterLogo = styled.div`
  display: inline-block;
  margin: auto;
`;

export const FooterSocials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  a {
    width: 30px;
    padding-bottom: 0.5rem;
    transition: all 0.2s ease;
    opacity: 0.9;
    &:hover {
      opacity: 1;
      transform: translate(1px, -1px);
      svg * {
        fill: ${orange};
      }
    }
  }
`;
