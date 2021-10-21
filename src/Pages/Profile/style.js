import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #237c95;

  overflow: auto;

  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  align-items: center;

  position: relative;
`;

export const Content = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BoxProfileTop = styled.div`
  background-color: #237c95;
  width: 100%;
  height: 12%;

  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileDIv = styled.div`
  width: 96%;
  min-height: 80%;
  margin: 5px 0;
  padding: 0 20px;
  background-color: #96e2f8;

  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BodyProfile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 12vh;
`;

export const BoxGroup = styled.div`
  width: 97%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-between;

  -webkit-justify-content: none;

  h2 {
    text-align: center;
  }
`;

export const ShowGroups = styled.ul`
  overflow: auto;

  height: 300px;
  width: 100%;

  margin-bottom: 10px;

  display: flex;
  flex-direction: row;
`;

export const CardGroup = styled.li`
  min-width: 300px;
  height: 90%;

  padding: 0 10px;
  margin: 5px;
  background-color: #96e2f8;

  border-radius: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-evenly; */

  div.nameCategoryGroup {
    width: 100%;
    text-align: center;
  }

  details {
    width: 100%;
    max-height: 90px;

    summary {
      width: 100%;
      height: 20px;
      display: flex;
      cursor: pointer;
    }
  }
`;

export const MetasGroups = styled(CardGroup).attrs({ as: "div" })`
  width: 97%;

  .titleMetas {
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    border-bottom: 1px solid gray;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  padding-bottom: 20px;
`;

export const ShowMetas = styled.ul`
  width: 100%;
  height: 300px;
  overflow: auto;
`;

export const Meta = styled.li`
  margin: 5px 0;
  padding: 5px 10px;
  border-bottom: 1px solid #0202c1;

  ${({ habito }) =>
    habito &&
    `
      width: 180px;
      height: 200px;
      border-radius: 20px 5px;
      border: 1px solid #0202c1;
      position: relative;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      &:hover {
      background-color: #3f3fc7;
      color: #e3e3e3;
    }

      .progress {
        min-width: 100%;
        width: 100%;
        margin-bottom: 10px;
      }
    `}

  button {
    width: 100%;
    height: 30px;
    background-color: #0202c1;
    border-radius: 20px 2px 20px 2px;
    border: none;
    cursor: pointer;
    color: #e3e3e3;
    font-size: 24px;

    position: absolute;
    bottom: 0;
    left: 0;

    &:hover {
      background-color: var(--pictonBlue);
    }
  }
`;

export const Addbutton = styled.button`
  background: var(--blue);
  color: var(--white);
  height: 25px;
  border: 2px solid #fff;
  border-radius: 100%;
  width: 25px;
  transition: 0.5s;
  margin-top: 0px;
  margin-left: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  :hover {
    border-color: var(--hoverBlue);
    color: var(--hoverBlue);
  }
`;
