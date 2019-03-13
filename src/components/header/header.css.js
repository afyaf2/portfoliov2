import styled from 'styled-components';
import { lightblue, orange } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2.5rem 0;
  width: 100vw;
  position: ${props => props.hero ? 'absolute' : 'unset'};
  box-shadow: ${props => props.hero ? 'none' : '0 -2px 20px rgba(102,119,136,0.3)'};
  top: 0;
  left: 0;
  a {
    padding: 0 2.5rem;
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: ${orange};
    }

    svg {
      padding-left: ${props => props.hero ? '7.5rem' : '2.5rem'};
    }
    svg * {
      fill: ${props => props.hero ? 'white' : `${lightblue}`};
    }
    ${MEDIA.TABLET`
      svg {
        padding-left: 0
      }
    `}
  }
`;
