import React from "react";

import { Container, TagOption, DateInput } from "./styles";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

// import TextField from '@material-ui/core/TextField';

import DatePicker from '../DatePicker';

import { ReactComponent as SubmissionDateIcon } from "../../assets/svgs/SubmissionDate.svg";
import { ReactComponent as RealizationDateIcon } from "../../assets/svgs/RealizationDate.svg";
import { ReactComponent as AssociatedDisciplineIcon } from "../../assets/svgs/AssociatedDiscipline.svg";
import { ReactComponent as ActivityTypeIcon } from "../../assets/svgs/ActivityType.svg";
import { ReactComponent as DescriptionIcon } from "../../assets/svgs/Description.svg";

function ActivityForm({
  readOnly = false,
  submissionDate,
  setSubmissionDate,
  realizationDate,
  setRealizationDate,
  associatedDiscipline,
  setAssociatedDiscipline,
  activityType,
  setActivityType,
  description,
  setDescription,
}) {
  const disciplines = ["Nenhuma", "OAC", "IHC", "CN"];

  const formatInputDate = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{2})/, "$1/$2")
      .replace(/(\/\d{2})(\d{2})/, "$1/$2")
      .replace(/\/(\d{2})(\d{2})\d?$/, " às $1:$2");
  };

  function onChange(timestamp) {
    console.log(timestamp);
  }
  
  return (
    <Container>
      <div className="inputs-container">
        <div className="input-group">
          <label className="smaller-text">
            <SubmissionDateIcon /> Data de Entrega:
          </label>
          {/* <input
            type="text"
            value={submissionDate}
            onChange={(e) => setSubmissionDate(formatInputDate(e.target.value))}
            placeholder="A definir"
            disabled={readOnly}
          /> */}
          {/* <DateInput
            id="datetime-local"
            // label="Next appointment"
            type="datetime-local"
            // defaultValue="2017-05-24T10:30"
            // className={classes.textField}
            onChange={(e) => {console.log(e.target.value); setSubmissionDate(e.target.value)}}
            InputLabelProps={{
              shrink: true,
            }}
          /> */}
          <DatePicker onChange={onChange} />
        </div>
        <div className="input-group">
          <label className="smaller-text">
            <RealizationDateIcon /> Data de Realização:
          </label>
          <input
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
      </div>
    </Container>
  );
}

export default ActivityForm;
