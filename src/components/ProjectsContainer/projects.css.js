import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { lightblue } from 'constants/theme';

export const ProjectList = styled.div`
  margin-bottom: 12.5rem;
  padding: 2.5rem 0;
  background: ${lightblue};
  display: inline-flex;
  width: 100vw;
  justify-content: center;
  ${MEDIA.TABLET`
    display: flex;
    flex-direction: column;
    padding: 2.5rem 0
  `}
`
