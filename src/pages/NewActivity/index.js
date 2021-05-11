import React, { useState } from "react";

import { Container, ContentContainer } from "./styles";
import ActivityForm from "../../components/ActivityForm";
import SectionHeader from "../../components/SectionHeader";
import LongButton from "../../components/LongButton";

import { create } from "../../services/Activities";

function NewActivity({ history }) {
  const [name, setName] = useState("");
  const [submissionDate, setSubmissionDate] = useState("");
  const [realizationDate, setRealizationDate] = useState("");
  const [associatedDiscipline, setAssociatedDiscipline] = useState("");
  const [activityType, setActivityType] = useState("Tarefa");
  const [description, setDescription] = useState("");

  const createActivity = async () => {
    try {
      await create({
        name: name,
        submissionDate: submissionDate,
        realizationDate: realizationDate,
        associatedDiscipline: associatedDiscipline.value,
        activityType: activityType,
        description: description,
        checked: false,
      });
      history.push("/activities");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <SectionHeader history={history} pageName="Nova Atividade" />
      <ContentContainer className="depth-box">
        <header>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="title-input"
            placeholder="Título da Atividade"
          />
        </header>
        <ActivityForm
          submissionDate={submissionDate}
          setSubmissionDate={setSubmissionDate}
          realizationDate={realizationDate}
          setRealizationDate={setRealizationDate}
          associatedDiscipline={associatedDiscipline}
          setAssociatedDiscipline={setAssociatedDiscipline}
          activityType={activityType}
          setActivityType={setActivityType}
          description={description}
          setDescription={setDescription}
        />
      </ContentContainer>
      <LongButton
        onClick={() => createActivity()}
        className="form-button"
        disabled={!name || !submissionDate || !activityType}
      >
        Salvar Atividade
      </LongButton>
    </Container>
  );
}

export default NewActivity;
