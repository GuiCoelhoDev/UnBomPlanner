import React from "react";

import { Container, TagOption } from "./styles";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import { ReactComponent as SubmissionDateIcon } from "../../assets/svgs/SubmissionDate.svg";
import { ReactComponent as RealizationDateIcon } from "../../assets/svgs/RealizationDate.svg";
import { ReactComponent as AssociatedDisciplineIcon } from "../../assets/svgs/AssociatedDiscipline.svg";
import { ReactComponent as ActivityTypeIcon } from "../../assets/svgs/ActivityType.svg";
import { ReactComponent as DescriptionIcon } from "../../assets/svgs/Description.svg";

function ActivityForm({
  readOnly = false,
  submissionDate = "",
  setSubmissionDate = () => {},
  realizationDate = "",
  setRealizationDate = () => {},
  associatedDiscipline = "",
  setAssociatedDiscipline = () => {},
  activityType = "",
  setActivityType = () => {},
  description = "",
  setDescription = () => {},
  submissionDateFilled,
  realizationDateFilled,
  titleFilled,
}) {
  const disciplines = ["Nenhuma", "OAC", "IHC", "CN"];

  const formatInputDate = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{2})/, "$1/$2")
      .replace(/(\/\d{2})(\d{2})/, "$1/$2")
      .replace(/\/(\d{2})(\d{2})\d?$/, " às $1:$2");
  };

  return (
    <Container
      submissionDateFilled={readOnly ? true : submissionDateFilled}
      realizationDateFilled={readOnly ? true : realizationDateFilled}
    >
      <div className="inputs-container">
        <div className="input-group">
          <label className="smaller-text">
            <SubmissionDateIcon /> Data de Entrega:
          </label>
          <input
            className="submission-date-filled"
            type="text"
            value={submissionDate}
            onChange={(e) => setSubmissionDate(formatInputDate(e.target.value))}
            placeholder="A definir"
            disabled={readOnly}
          />
        </div>
        <div className="input-group">
          <label className="smaller-text">
            <RealizationDateIcon /> Data de Realização:
          </label>
          <input
            className="realization-date-filled"
            type="text"
            value={realizationDate}
            onChange={(e) =>
              setRealizationDate(formatInputDate(e.target.value))
            }
            placeholder="A definir"
            disabled={readOnly}
          />
        </div>
      </div>
      <div className="inputs-container">
        <div className="input-group">
          <label className="smaller-text">
            <AssociatedDisciplineIcon /> Disciplina Associada:
          </label>
          <Dropdown
            className="associated-discipline-filled"
            controlClassName="select"
            value={associatedDiscipline}
            placeholder={"Nenhuma"}
            onChange={setAssociatedDiscipline}
            options={disciplines}
            disabled={readOnly}
          />
        </div>
        <div className="selection-group">
          <label className="smaller-text">
            <ActivityTypeIcon /> Tipo de Atividade:
          </label>
          <TagOption
            className={
              activityType === "Tarefa" ? "selected type-option" : "type-option"
            }
            onClick={readOnly ? () => {} : () => setActivityType("Tarefa")}
            tagColor={"#FCBF9C"}
          >
            Tarefa
          </TagOption>
          <TagOption
            className={
              activityType === "Prova" ? "selected type-option" : "type-option"
            }
            onClick={readOnly ? () => {} : () => setActivityType("Prova")}
            tagColor={"#dcf8a1"}
          >
            Prova
          </TagOption>
          <TagOption
            className={
              activityType === "Trabalho"
                ? "selected type-option"
                : "type-option"
            }
            onClick={readOnly ? () => {} : () => setActivityType("Trabalho")}
            tagColor={"#FFF8B6"}
          >
            Trabalho
          </TagOption>
        </div>
      </div>
      <div className="textarea-group">
        <label className="smaller-text">
          <DescriptionIcon /> Descrição:
        </label>
        <textarea
          disabled={readOnly}
          placeholder={readOnly ? "Sem descrição" : "Digite aqui..."}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {!readOnly &&
        (!titleFilled || !submissionDateFilled || !realizationDateFilled) ? (
          <p className="error-message">Preencha os campos indicados.</p>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
}

export default ActivityForm;
