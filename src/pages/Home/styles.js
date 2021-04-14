import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  gap: 0.5rem;

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
    gap: 1.25rem;
  }

  footer {
    align-self: start;
    display: grid;
    gap: 1rem;
  }
`;

export const SquareButton = styled(Link)`
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 5px;

  box-shadow: 6px 6px 16px rgba(200, 162, 124, 0.32),
    -6px -6px 16px rgba(255, 254, 252, 0.56);

  display: grid;
  align-content: center;
  justify-items: center;
  gap: 0.25rem;
  grid-template-rows: repeat(2, min-content);

  &.disabled {
    opacity: 0.7;
  }

  &:not(.disabled):active {
    box-shadow: 4px 4px 5px rgba(200, 162, 124, 0.32),
      -4px -4px 5px rgba(255, 254, 252, 0.56);
  }
`;
