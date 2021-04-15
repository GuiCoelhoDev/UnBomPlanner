import styled from "styled-components";
import { Link } from "react-router-dom";
import ColorsProvider from "../../assets/styles/ColorsProvider"

export const Container = styled.section`
  padding: 1rem;
  display: grid;
  grid-template-rows: 1fr 3fr 3fr;
  justify-items: center;

  .atividades-container {
    display: grid;
    
  }

`;

export const Box = styled.article`

 border-radius: 10px;
 background-color: ${props => props.theme.clearBrown}

`;

export const RectangularButton = styled(Link)`
  width: 100%;
  height: 100%;
  border-radius: 10px;

  background-color: ${props => props.theme.darkBrown};

  box-shadow: 6px 6px 16px ,
    -6px -6px 16px rgba(255, 254, 252, 0.56);


    &.disabled {
    opacity: 0.7;
  }

  &:not(.disabled):active {
    box-shadow: 4px 4px 5px rgba(200, 162, 124, 0.32),
      -4px -4px 5px rgba(255, 254, 252, 0.56);
  }
`;
