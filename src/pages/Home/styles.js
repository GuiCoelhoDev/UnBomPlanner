import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;

  justify-items: center;
  align-items: center;

  text-align: center;

  .logo {
    align-self: end;
  }

  .buttons-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
  }
`;

export const SquareButton = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 5px;

  box-shadow: 6px 6px 16px rgba(200, 162, 124, 0.32),
    -6px -6px 16px rgba(255, 254, 252, 0.56);
`;
