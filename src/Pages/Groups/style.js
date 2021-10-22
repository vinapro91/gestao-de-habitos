import styled from "styled-components";
import { Container } from "../Profile/style";

export const FullScreenGroups = styled(Container)`
  div.TitleGroups {
    text-align: center;
  }

  div.BoxButtonsPage {
    width: 60%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div.listCard {
    width: 100%;
    height: 82%;

    overflow: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-top: 1px solid #e3e3;
    margin-top: 5px;
  }
`;

export const ShowGroupsCards = styled.ul`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
