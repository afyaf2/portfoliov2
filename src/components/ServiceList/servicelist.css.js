import styled from 'styled-components';
import { lightblue } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  max-width: 100vw;

  h2 {
    padding-top: 2.5rem;
    font-size: 5rem;
  }

  ${MEDIA.DESKTOP`
    h2 {
      font-size: 3.5rem
    }
  `}
`;

export const List = styled.div`
  background: ${lightblue};
  h5 {
    padding-top: 1rem;
    font-size: 3rem;
    width: max-content;
    position: relative;
    z-index: 4;
    &::after {
      z-index: -1;
      position: absolute;
      top: 20px;
      left: 0;
      content: '';
      height: 20px;
      width: 100%;
      background: white;
      opacity: 0.5;
    }
  }
  padding: 2.5rem 5rem;

  .list-item {
    padding: 2.5rem 0 0;
    ul {
      padding-top: 1rem;
      li {
        line-height: 2;
      }
    }
    &:last-of-type {
      padding-bottom: 2.5rem;
    }
  }

  ${MEDIA.DESKTOP`
    padding: 2.5rem;
    h5 {
      font-size: 2.5rem
    }
  `}
`;
