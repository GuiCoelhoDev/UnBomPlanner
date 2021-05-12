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
  // Validations
  const [titleFilled, setTitleFilled] = useState(true);
  const [submissionDateFilled, setSubmissionDateFilled] = useState(true);
  const [realizationDateFilled, setRealizationDateFilled] = useState(true);

  const createActivity = async () => {
    // Se o name estiver vazio, não quero entrar no try, quero retornar um css e um aviso de que não foi criado?
    if (!name || !submissionDate || !activityType) {

      if (!name) {
        setTitleFilled(false);
      }
      if (!submissionDate) {
        setSubmissionDateFilled(false);
      }
      if (!realizationDate) {

        setRealizationDateFilled(false);


      }
    }
    else {


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
    }
  };

  return (
    <Container>
      <SectionHeader history={history} pageName="Nova Atividade" />
      <ContentContainer titleFilled={titleFilled} className="depth-box">
        <header>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="title-input"
            placeholder="Título da Atividade"
          />
        </header>
        <ActivityForm submissionDateFilled={submissionDateFilled} realizationDateFilled={realizationDateFilled}
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
        disabled={!activityType}
      >
        Salvar Atividade
      </LongButton>
    </Container>
  );
}

export default NewActivity;
