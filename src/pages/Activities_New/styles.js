import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-rows: 0.5fr 2fr 2fr;
  justify-items: center;
  padding: 1rem;

  .activities-title {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #704a1e;
  }
`;
export const TasksContainer = styled.article`
  /* display: grid; */

`;

export const ActivitiesContainer= styled.article`
display: grid;


`;
export const ActivitiesBox = styled.div`
  display: grid;
  width: 15rem;
  height: 13rem;
  background-color: #efe7de;
  box-shadow: inset 6px 6px 8px rgba(200, 162, 124, 0.32),
    inset -6px -6px 16px rgba(255, 254, 252, 0.56);
  border-radius: 10px;
`;
