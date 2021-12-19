import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 340px;
  margin: 0 auto;
  padding-top: 110px;

  img {
    max-width: 218px;
    margin: 0 auto;
  }

  form {
    h1 {
      margin-top: 30px;
      margin-bottom: 26px;
      text-align: center;
      font-weight: normal;
    }

    input {
      background: #272730;
      color: #f8f9fa;
      border-radius: 10px;
      border: 0;
      padding: 16px;
      width: 100%;

      & + input {
        margin-top: 13px;
      }
    }

    a {
      margin: 20px 0;
      display: inline-block;
      color: #f8f9fa;
      font-weight: 300;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#0075ff')};
      }
    }
  }

  .separator {
    margin: 17px 0;
    color: ${shade(0.6, '#f8f9fa')};

    display: flex;
    align-items: center;

    &::before {
      content: '';
      flex: 1;
      height: 1px;
      background: ${shade(0.6, '#f8f9fa')};
      margin-right: 16px;
    }

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: ${shade(0.6, '#f8f9fa')};
      margin-left: 16px;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    color: #f8f9fa;
    background: #0075ff;
    height: 56px;
    width: 100%;
    border: 0;
    border-radius: 10px;
    padding: 0 16px;

    text-transform: uppercase;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#0075ff')};
    }

    &:active {
      filter: drop-shadow(0 0 0.6rem rgba(0, 117, 255, 0.25));
    }

    .register-icon {
      margin-right: 10px;
    }
  }
`;
