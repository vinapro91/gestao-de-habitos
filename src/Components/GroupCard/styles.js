import styled from "styled-components";

export const Card = styled.li`
  width: 300px;


  min-height: 110px;
  height: 170px;


  padding: 10px;
  margin: 20px;

  border: 1px solid transparent;
  border-radius: 20px;
  background-color: #96e2f8;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 0 8px 2px #5864b9;

  &:hover {
    transition: 0.5s;

    box-shadow: 0 0 8px 2px #19204e;
  }
  &:active {
    box-shadow: 0 0 8px 2px #19204e inset;
  }

  div.positionCategory-menber {
    width: 100%;
    text-decoration: underline;

    display: flex;
    align-items: center;
    justify-content: space-around;


    span::before {
      content: "";
      display: block;
    }

  }

  div.descriptionGroup {
    height: 80px;
    width: 100%;


    overflow: auto;

  }
`;
