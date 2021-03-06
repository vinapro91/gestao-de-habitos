import styled from "styled-components";

export const ButtonStyled = styled.button`
  background: ${(props) => (props.registerSchema ? "#00C3FA" : "#3D8CA2")};
  color: ${(props) => (props.registerSchema ? "#0E4A5B" : "#fff")};
  height: 35px;
  border: 2px solid #fff;
  border-radius: 5px;
  width: ${(props) => (props.homePage ? "100%" : "100px")};
  transition: 0.5s;
  margin-top: ${(props) => (props.homePage ? "20px" : "0px")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  :hover {
    border-color: var(--hoverBlue);
    color: var(--hoverBlue);
  }
`;
