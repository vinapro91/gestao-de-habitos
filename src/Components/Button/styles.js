import styled from "styled-components";

export const ButtonStyled = styled.button`
  background: ${(props) => (props.registerSchema ? "#00C3FA" : "#3D8CA2")};
  color: ${(props) => (props.registerSchema ? "#0E4A5B" : "#fff")};
  height: 35px;
  border: 2px solid #fff;
  border-radius: ${(props) => (props.formActivity ? "100%" : "5px")};
  width: ${(props) => (props.homePage ? "100%" : "100px")};
  width: ${(props) => (props.formActivity ? "25px" : "100px")};
  transition: 0.5s;
  margin-top: ${(props) => (props.formActivity ? "0px" : "20px")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  :hover {
    border-color: var(--hoverBlue);
    color: var(--hoverBlue);
  }
`;
