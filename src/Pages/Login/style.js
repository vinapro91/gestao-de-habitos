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

export const ButtonStyled = styled.button`
  background-color: #4380b1;
  height: 35px;
  width: 130px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 4px 1px #c4d7efb8;
  transition: 1.5s;
  color: #ffffff;

  font-weight: 500;
  letter-spacing: 1px;

  @media (min-width: 580px) {
    &:hover {
      box-shadow: 0 0 4px 1px #89023f;
      color: #89023f;
      transform: scale(110%);
      letter-spacing: 2px;
      background-color: #90b7d7;
    }
  }
`;
