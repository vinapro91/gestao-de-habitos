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
