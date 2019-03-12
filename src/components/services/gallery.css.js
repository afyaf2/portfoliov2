import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  padding: 4rem 0;
  margin: 0 10rem;

  ${MEDIA.TABLET`
    margin: 0 2.5rem;
    display: block;
  `};
`;
