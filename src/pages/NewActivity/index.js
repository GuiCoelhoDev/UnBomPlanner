import React from "react";

import { Container, ContentContainer } from "./styles";
import ActivityForm from "../../components/ActivityForm";
import SectionHeader from "../../components/SectionHeader";
import LongButton from "../../components/LongButton";

function NewActivity({ history }) {
  return (
    <Container>
      <SectionHeader history={history} pageName="Nova Atividade" />
      <ContentContainer className="depth-box">
        <header>
          <input className="title-input" placeholder="Título da Atividade" />
        </header>
        <ActivityForm />
      </ContentContainer>
      <LongButton className="form-button">Salvar Atividade</LongButton>
    </Container>
  );
}

export default NewActivity;
