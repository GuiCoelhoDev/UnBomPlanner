import React, { useState } from "react";

import { Container, TagOption } from "./styles";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import { ReactComponent as SubmissionDateIcon } from "../../assets/svgs/SubmissionDate.svg";
import { ReactComponent as RealizationDateIcon } from "../../assets/svgs/RealizationDate.svg";
import { ReactComponent as AssociatedDisciplineIcon } from "../../assets/svgs/AssociatedDiscipline.svg";
import { ReactComponent as ActivityTypeIcon } from "../../assets/svgs/ActivityType.svg";
import { ReactComponent as DescriptionIcon } from "../../assets/svgs/Description.svg";

function ActivityForm({ readOnly = false }) {
  const disciplines = ["Nenhuma", "OAC", "IHC", "CN"];

  const [submission, setSubmission] = useState("");
  const [realization, setRealization] = useState("");
  const [selectedType, setSelectedType] = useState("Tarefa");

  const formatInputDate = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{2})/, "$1/$2")
      .replace(/(\/\d{2})(\d{2})/, "$1/$2")
      .replace(/\/(\d{2})(\d{2})\d?$/, " às $1:$2");
  };
  return (
    <Container>
      <div className="inputs-container">
        <div className="input-group">
          <label className="smaller-text">
            <SubmissionDateIcon /> Data de Entrega:
          </label>
          <input
            type="text"
            value={submission}
            onChange={(e) => setSubmission(formatInputDate(e.target.value))}
            placeholder="A definir"
            disabled={readOnly}
          />
        </div>
        <div className="input-group">
          <label className="smaller-text">
            <RealizationDateIcon /> Data de Realização:
          </label>
          <input
            type="text"
            value={realization}
            onChange={(e) => setRealization(formatInputDate(e.target.value))}
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
            controlClassName="select"
            value={"Nenhuma "}
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
              selectedType === "Tarefa" ? "selected type-option" : "type-option"
            }
            onClick={readOnly ? () => {} : () => setSelectedType("Tarefa")}
            tagColor={"#FCBF9C"}
          >
            Tarefa
          </TagOption>
          <TagOption
            className={
              selectedType === "Prova" ? "selected type-option" : "type-option"
            }
            onClick={readOnly ? () => {} : () => setSelectedType("Prova")}
            tagColor={"#dcf8a1"}
          >
            Prova
          </TagOption>
          <TagOption
            className={
              selectedType === "Trabalho"
                ? "selected type-option"
                : "type-option"
            }
            onClick={readOnly ? () => {} : () => setSelectedType("Trabalho")}
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
        />
      </div>
    </Container>
  );
}

export default ActivityForm;
