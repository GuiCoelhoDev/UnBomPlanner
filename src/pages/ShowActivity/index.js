import React, { useState } from "react";

import { Container, ContentContainer } from "./styles";

import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import EditIcon from "@material-ui/icons/Edit";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import { ReactComponent as SubmissionDateIcon } from "../../assets/SubmissionDate.svg";
import { ReactComponent as RealizationDateIcon } from "../../assets/RealizationDate.svg";
import { ReactComponent as AssociatedDisciplineIcon } from "../../assets/AssociatedDiscipline.svg";
import { ReactComponent as ActivityTypeIcon } from "../../assets/ActivityType.svg";
import { ReactComponent as DescriptionIcon } from "../../assets/Description.svg";

function ShowActivity() {
  const disciplines = ["Nenhuma", "OAC", "IHC", "CN"];

  const [submission, setSubmission] = useState("");
  const [realization, setRealization] = useState("");

  const formatInputDate = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{2})/, "$1/$2")
      .replace(/(\/\d{2})(\d{2})/, "$1/$2")
      .replace(/\/(\d{2})(\d{2})\d?$/, " às $1:$2");
  };

  return (
    <Container>
      <nav className="page-header">
        <Link to="/activities" className="back-link">
          <ArrowBackIcon />
          Voltar
        </Link>
        <p className="subtitle">Atividade</p>
      </nav>
      <ContentContainer className="depth-box">
        <header>
          <h3 className="box-title">Trabalho de OAC</h3>
          <EditIcon />
        </header>
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
            />
          </div>
          <div className="input-group horiz-group">
            <label className="smaller-text">
              <ActivityTypeIcon /> Tipo de Atividade:
            </label>
            <input type="text" placeholder="A definir" />
          </div>
          <div className="textarea-group">
            <label className="smaller-text">
              <DescriptionIcon /> Descrição:
            </label>
            <textarea placeholder="Digite aqui..." />
          </div>
        </div>
      </ContentContainer>
    </Container>
  );
}

export default ShowActivity;
