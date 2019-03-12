import styled from 'styled-components';
import { orange, lightblue } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 7.5rem 100px;
  text-align: center;
  h2 {
    font-size: 5rem;
  }
  h3 {
    font-size: 3.5rem;
    opacity: 0.5;
    padding: 1.5rem 0;
  }
  .form-field {
    padding: 0.5rem 0;
    text-align: left;
    position: relative;

    input,
    textarea {
      font-family: 'Trueno-Rg', sans-serif;
      font-size: 1.25rem;
      resize: none;
      outline: none;
      height: 50px;
      border-radius: 5px;
      color: ${lightblue};
      border: 2px ${lightblue} solid;
      width: 40rem;
      font-size: 18px;
      padding-left: 1%;
      transition: background 0.2s linear;
      &:focus {
        background: ${lightblue};
        color: white;
        opacity: 1;
      }

      ${MEDIA.TABLET`
        width: 300px
      `}
    }
    label {
      font-family: 'Trueno-Rg', sans-serif;
      font-size: 1.2rem;
      padding-left: 0.5rem;
    }
    textarea {
      padding-top: 5%;
    }
    &.submit {
      padding-top: 1.5rem;
      display: flex;
      button {
        border: 2px ${lightblue} solid;
        cursor: pointer;
        text-transform: uppercase;
        border-radius: 10px;
        opacity: 1;
        color: ${lightblue};
        font-family: 'Trueno-Bd', sans-serif;
        font-weight: bold;
        background: white;
        height: 35px;
        width: 125px;
        margin: auto;
        transition: all 0.2s ease;
        &:hover {
          color: ${orange};
          border: 1px ${orange} solid;
          box-shadow: 0.3em 0.3em 0 0 ${orange};
        }
      }
    }
  }
`;
