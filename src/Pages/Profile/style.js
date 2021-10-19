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
  justify-content: space-evenly;

  div.nameCategoryGroup {
    width: 100%;
    text-align: center;
  }

  div.descriptionCard {
    min-height: 70%;
    width: 100%;
  }
  span.txtDescription::after {
    content: "";
    display: block;
  }
`;

export const MetasGroups = styled(CardGroup).attrs({ as: "div" })`
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
  height: 300px;
  overflow: auto;
`;

export const Meta = styled.li`
  margin: 5px 0;
  padding: 5px 10px;
  border-bottom: 1px solid #0202c1;
`;
