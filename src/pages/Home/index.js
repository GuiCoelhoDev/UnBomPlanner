import React from "react";
import { Container, SquareButton } from "./styles";
import { useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import LongButton from "../../components/LongButton";
import Agenda from "../../assets/Agenda.svg"
import Atividades from "../../assets/Atividades.svg"
import Notas from "../../assets/Notas.svg"
import Disciplinas from "../../assets/Disciplinas.svg"

const Home = () => {
  const history = useHistory();

  const activities = () => {

    return history.push("/activities")
  }
  return (
    <Container className="home">
      <Logo className="logo" />
      <article className="buttons-container">
        <SquareButton>
        <img src={Agenda}></img>
        
          <p className="dark-brown">Agenda</p>
        </SquareButton>

        <SquareButton onClick={activities}>
          <img src={Atividades}></img>

          <p className="dark-brown">Atividades</p>
        </SquareButton>

        <SquareButton>
        <img src={Notas}></img>

          <p className="dark-brown">Notas</p>
        </SquareButton>

        <SquareButton>
        <img src={Disciplinas}></img>

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
