import styled from "styled-components";
import { Container } from "../Profile/style";

export const ContainerGroup = styled(Container)``;

export const BoxOverFlow = styled.div`
  min-width: 100%;
  max-width: 100%;

  /* min-height: 100%; */
  max-height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box = styled.div`
  background-color: #96e2f8;
  width: 90%;
  min-height: 30px;
  max-height: 175px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  margin: 3px;
  padding-bottom: 5px;
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
      /* border: 1px solid #cc43e8; */
      border-radius: 15px;
      cursor: pointer;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const BodyGroup = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxDetails = styled.div`
  max-height: 100%;
  height: 78%;
  width: 100%;
  text-align: center;

  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      width: 99%;
      height: 55px;
      margin: 5px 0;

      border: 1px solid #cc43e8;
      border-radius: 20px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }
  }

  /* background: #31e3e3; */
`;

export const HeaderGroup = styled.header`
  width: 90%;
  min-height: 35px;
  margin-top: 5px;
  padding-bottom: 10px;

  position: relative;

  background-color: #96e2f8;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  details {
    height: 100%;
    width: 100%;

    summary {
      height: 30px;
      width: 100%;
      /* border: 1px solid #cc43e8; */
      border-radius: 15px;
      cursor: pointer;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  h1 {
    font-size: 18px;
    font-weight: 500;
    text-decoration: underline;
  }
  p {
    font-size: 15px;
    text-align: center;
  }
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

export const ButtonBack = styled.div`
  background-color: #31e3e3;
  height: 30px;
  width: 30px;
  cursor: pointer;

  border: 1px solid #e3e;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 25px;
  font-weight: 600;

  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    border: 1px solid #032032;
    background-color: #03355c;
    color: #31e3e3;
  }
`;

export const CenterBox = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
