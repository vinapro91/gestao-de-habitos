import styled from "styled-components";
import { Container, ButtonPlus } from "../Profile/style";

export const FullScreenGroups = styled(Container)`
  div.TitleGroups {
    text-align: center;
    height: 98px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    color: #f3f3f3;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }

  div.BoxButtonsPage {
    width: 60%;

    margin-top: 10px;
    margin-bottom: 10px;

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

  div.ButtonBack {
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-top: 2px solid #e3e3;
  }
`;

export const ShowGroupsCards = styled.ul`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  a {
    color: var(--black);
  }
  a:active {
    color: var(--black);
  }

  a:visited {
    color: var(--black);
  }
`;

export const ButtonNextPage = styled(ButtonPlus)`
  width: 30px;
  height: 30px;

  ${({ large }) =>
    large &&
    `
    width: 100px;
    border-radius: 3px;
    font-size: 16px;
    `}
`;
