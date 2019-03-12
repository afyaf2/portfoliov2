import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const ProjectCard = styled.div`
  position: relative;
  width: 360px;
  height: 325px;
  margin: 2.5rem;
  flex-shrink: 0;
  box-shadow: 2px 17px 20px 0 rgba(0,0,0,0.04);
  text-align: left;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  background: #FFFF;
  border-radius: 5px;

  .project-description {
    font-size: 12px;
    line-height: 15px;
    strong {
      font-weight: bold;
      border-bottom: 1px solid black;
      font-size: 11px
    }
  }

  h2 {
    font-size: 32px;
    margin-top: 0.5rem
  }

  .small-subtitle {
    margin-top: 4rem;
    font-size: 22px;
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  h3 {
    margin-top: 0.5rem;
    font-size: 20px;
    opacity: 0.5
  }

  .project-description {
    margin-top: auto;
    p {
      font-size: 12px;
      line-height: 16px;
      margin-bottom: 0
    }
  }
  ${MEDIA.TABLET`
    margin: 2.5rem auto;
    width: 300px;
    height: unset;
    h2 {
      font-size: 28px;
    }
    h3 {
      font-size: 16px
    }
    .small-subtitle {
      font-size: 20px;
      margin-top: 2.5rem;
    }
    .project-description {
      margin-top: 2.5rem
    }
  `}
`

export const LinkIcons = styled.div`
  position: absolute;
  top: 0;
  margin: 3rem;
  right: 0;
  display: flex;
  flex-direction: column;
  a {
    opacity: 0.9
  }
  a:first-child {
    padding-bottom: 0.5rem
  }
  a:hover {
    transform: scale(1.1);
    opacity: 1
  }
`

export const IconRow = styled.div`
  display: flex;
  svg {
    height: 40px;
    width: 40px;
    margin-right: 10px
  }
`
