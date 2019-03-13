import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;

export const ContentBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2.5rem;
  grid-template-rows: 450px;

  h2 {
    font-size: 5rem;
  }

  h3 {
    font-size: 3.5rem;
    opacity: 0.5;
  }

  &:nth-child(odd) {
    svg {
      grid-column: 3;
    }
    .service-info {
      grid-column: 1;
      grid-row: 1;
    }
    ${MEDIA.DESKTOP`
      svg {
        grid-column: unset;
      }
      .service-info {
        grid-column: unset;
        grid-row: unset
      }
    `}
  }
  .service-info {
    margin: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    ul {
      width: 85%;

      li {
        p {
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }
        &:last-child p {
          margin-bottom: 0;
        }
      }
    }
  }
  svg {
    max-height: 450px;
    transform: scale(0.8);
    margin: auto;
  }

  ${MEDIA.DESKTOP`
    grid-template-rows: unset;

    svg {
      transform: scale(0.9);
      margin: 0
    }

    h2 {
      font-size: 3.25rem;
    }
    h3 {
      padding-top: 1.5rem;
      font-size: 2.5rem
    }
    .service-info {
      margin: 0 2rem;

      ul {
        width: 90%;
        padding: 2rem 0;
        font-size: 1.4rem;
      }
  `}
`;
