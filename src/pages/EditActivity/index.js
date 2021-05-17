import React, { useState, useEffect, useCallback } from "react";

import { Container, ContentContainer } from "./styles";
import ActivityForm from "../../components/ActivityForm";
import SectionHeader from "../../components/SectionHeader";
import LongButton from "../../components/LongButton";

import { useParams } from "react-router-dom";

import { show, update } from "../../services/Activities";

function EditActivity({ history }) {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [submissionDate, setSubmissionDate] = useState(new Date());
  const [realizationDate, setRealizationDate] = useState(new Date());
  const [associatedDiscipline, setAssociatedDiscipline] = useState("");
  const [activityType, setActivityType] = useState("Tarefa");
  const [description, setDescription] = useState("");

  const [hasData, setHasData] = useState(false);

  //VALIDATIONS
  const [titleFilled, setTitleFilled] = useState(true);
  const [submissionDateFilled, setSubmissionDateFilled] = useState(true);
  const [realizationDateFilled, setRealizationDateFilled] = useState(true);

  const [loading, setLoading] = useState(true);

  const fetchActivity = useCallback(async () => {
    setLoading(true);

    const response = await show(id);

    setHasData(true);
    setName(response?.name);
    setSubmissionDate(response?.submissionDate);
    setRealizationDate(response?.realizationDate);
    setAssociatedDiscipline(response?.associatedDiscipline);
    setActivityType(response?.activityType);
    setDescription(response?.description);

    setLoading(false);
  }, [id]);

  const updateActivity = async () => {
    setTitleFilled(true);
    setSubmissionDateFilled(true);
    setRealizationDateFilled(true);

    if (!name || !submissionDate || !realizationDate) {
      if (!name) {
        setTitleFilled(false);
      }
      if (!submissionDate) {
        setSubmissionDateFilled(false);
      }
      if (!realizationDate) {
        setRealizationDateFilled(false);
      }
    } else {
      try {
        await update(id, {
          name: name,
          submissionDate: submissionDate,
          realizationDate: realizationDate,
          associatedDiscipline:
            typeof associatedDiscipline === "string"
              ? associatedDiscipline
              : associatedDiscipline?.value,
          activityType: activityType,
          description: description,
        });
        history.push(`/activity/${id}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchActivity();
  }, [fetchActivity]);

  return (
    <Container>
      <SectionHeader history={history} pageName="Editar Atividade" />
      <ContentContainer titleFilled={titleFilled} className="depth-box">
        {loading ? (
          <></>
        ) : hasData ? (
          <>
            <header>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="title-input"
                placeholder="Título da Atividade"
              />
            </header>
            <ActivityForm
              submissionDateFilled={submissionDateFilled}
              realizationDateFilled={realizationDateFilled}
              titleFilled={titleFilled}
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
          </>
        ) : (
          <p className="smaller-text">Esta atividade não existe :(</p>
        )}
      </ContentContainer>
      <LongButton onClick={() => updateActivity()} className="form-button">
        Salvar Atividade
      </LongButton>
    </Container>
  );
}

export default EditActivity;
