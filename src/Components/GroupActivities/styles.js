import styled from "styled-components";

export const BoxDetails = styled.div`
  height: 90%;
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

      border: 1px solid #3cb2a0;
      border-radius: 20px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }
  }

  /* background: #31e3e3; */
`;
export const ButtonAddGroup = styled.button`
  background-color: #31e3e3;
  height: 25px;
  width: 25px;
  cursor: pointer;
  margin-left: 5px;

  border: 1px solid #e3e;
  border-radius: 50px;
  text-align: center;

  font-size: 1rem;

  &:hover {
    border: 1px solid #032032;
    background-color: #03355c;
    color: #31e3e3;
  }
`;

export const ButtonRemoveGroup = styled.button`
  background-color: var(--red);
  height: 15px;
  width: 15px;
  cursor: pointer;
  margin: 0;

  border: 1px solid #e3e;
  border-radius: 50px;

  font-size: 1rem;

  &:hover {
    border: 1px solid #032032;
    background-color: #03355c;
    color: #31e3e3;
  }
`;
