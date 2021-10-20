import styled from "styled-components";
import { Container } from "../Profile/style";

export const ContainerGroup = styled(Container)``;

export const BackGroundHeader = styled.div`
  width: 100%;
  height: 22vh;

  position: fixed;
  top: 0;

  background-color: #237c95;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box = styled.div`
  background-color: #96e2f8;
  width: 90%;
  min-height: 30px;
  max-height: 60%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  margin: 5px;
  border-radius: 20px;

  h1 {
    font-size: 24px;
  }

  details {
    height: 100%;
    width: 100%;

    summary {
      height: 30px;
      width: 100%;
      border: 1px solid #cc43e8;
      border-radius: 15px;
      cursor: pointer;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const HeaderGroup = styled(Box).attrs("header")`
  min-height: 20vh;
`;

export const BodyGroup = styled.main`
  margin-top: 23vh;
  width: 100%;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxButton = styled.div`
  width: 100%;
  height: 8vh;
  background-color: #03355c;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 0;

  button {
    background-color: transparent;
    border: none;
    width: 100%;
    height: 100%;

    font-size: 24px;
    color: #31e3e3;
  }
`;
