import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { lightblue } from 'constants/theme';

export const Hero = styled.div`
  display: block;
  height: 50rem;
  background: ${lightblue};
  padding: 25rem 10rem 0;
  max-width: 100vw;

  h1 {
    font-size: 10rem;
  }
  h2 {
    font-size: 5rem;
    opacity: 0.5;
  }

  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '400';
      default:
        return '500';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '3.2rem';
      default:
        return '2rem';
    }
  }};
  line-height: 1.2;

  ${MEDIA.DESKTOP`
    padding: 17.5rem 4.5rem;
    height: unset;

    h1 {
      font-size: 4rem;
      margin-bottom: 2.5rem
    }
    h2 {
      letter-spacing: -1px;
      font-size: 3.5rem;
      width: 50%;
      padding-left: 5rem;
      border-left: 20px solid white;
      padding-top: 2.5rem;
    }
  `};
`;
