import React from "react";


import { Container, RectangularButton, Box } from "./styles";
import Theme from "../../assets/styles/ColorsProvider"




const Activities = () => {
  return (
    <Theme>

      <Container>
        <nav >
          <p className="subtitle">Atividades</p>
        </nav>


        <Box className="atividades-container">
          {/* Atividade 1 */}

          {/* Atividade 2 */}
          <p> Tarefa 1</p>
          <p> Tarefa 1</p>
          <p> Tarefa 1</p>
          <p> Tarefa 1</p>
          <RectangularButton>+ Adicionar Atividade</RectangularButton>
        </Box>
        <Box className="atividades-container">
          {/* Atividade 1 */}
          {/* Atividade 2 */}
          <p> Tarefa 1</p>
          <p> Tarefa 1</p>
          <p> Tarefa 1</p>
          <p> Tarefa 1</p>
          <RectangularButton>Adicionar Atividade</RectangularButton>
        </Box>

      </Container>
    </Theme>

  );
};

export default Activities;
