import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #237c95;
  text-align: center;
  height: 100vh;

  @media screen and (min-width: 768px) {
    background-color: #14404d;
  }
`;

export const Content = styled.div`
  max-width: 320px;
  h1 {
    color: #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    font-family: "Pacifico", cursive;
    letter-spacing: 4px;
    font-size: 1.7rem;
  }
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    button + button {
      margin-top: 20px;
    }
  }
  p {
    margin-bottom: 2rem;
    margin-top: 1.5rem;
    color: #f0fff0;
  }

  @media screen and (min-width: 768px) {
    max-width: 400px;
    h1 {
      font-size: 2rem;
    }
    div {
      flex-direction: row;
      button + button {
        margin-left: 20px;
      }
    }
  }
`;
