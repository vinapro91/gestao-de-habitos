import styled from "styled-components";

export const FullScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #14404d;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxForm = styled.div`
  background-color: #3d8ca2;
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 0;
    padding: 0;

    color: #ffffff;
    text-shadow: -2px 6px 4px #030303;

    letter-spacing: 10px;
    font-family: Pacifico, sans-serif;
    font-weight: 400;
    text-transform: capitalize;
    text-align: center;
  }

  form {
    width: 70%;
    height: 65%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  p {
    position: absolute;
    bottom: 10px;
    left: 25px;

    span {
      color: #89023f;
      cursor: pointer;
      font-weight: bold;
      letter-spacing: 1.5px;
    }
    span:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 580px) {
    & {
      width: 350px;
      height: 500px;

      border-radius: 30px;
    }
  }
`;
