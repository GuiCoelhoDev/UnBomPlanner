import React from "react";
import { Container, SquareButton } from "./styles";

import { ReactComponent as Logo } from "../../assets/Logo.svg";
import LongButton from "../../components/LongButton";

const Home = () => {
  return (
    <Container className="home">
      <Logo className="logo" />
      <article className="buttons-container">
        <SquareButton>
          <p className="dark-brown">Agenda</p>
        </SquareButton>

        <SquareButton>
          <p className="dark-brown">Atividades</p>
        </SquareButton>

        <SquareButton>
          <p className="dark-brown">Notas</p>
        </SquareButton>

        <SquareButton>
          <p className="dark-brown">Disciplinas</p>
        </SquareButton>
      </article>
      <footer>
        <p>2020.2</p>
        <LongButton name="Gerenciar Semestres" />
      </footer>
    </Container>
  );
};

export default Home;
