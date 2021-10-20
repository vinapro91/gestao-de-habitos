import styled from "styled-components";

export const ButtonDelete = styled.button`
  width: 20px;
  border-radius: 100%;
  background-color: var(--red);
  color: var(--white);
  border: 1px solid var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  :hover {
    border-color: var(--blue);
    color: var(--blue);
  }
`;
