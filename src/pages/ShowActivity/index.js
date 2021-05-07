import React from "react";

import { Container, ContentContainer } from "./styles";

import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import EditIcon from "@material-ui/icons/Edit";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DateRangeIcon from "@material-ui/icons/DateRange";

function ShowActivity() {
  return (
    <Container>
      <nav className="page-header">
        <Link to="/" className="back-link">
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
        <>
          <div className="input-group">
            <label>
              <EventAvailableIcon /> Data de Entrega:
            </label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>
              <DateRangeIcon /> Data de Realização:
            </label>
            <input type="text" />
          </div>
        </>
        <>
          <div className="input-group">
            <label>
              <BookmarksIcon /> Disciplina Associada:
            </label>
            <input type="text" />
          </div>
        </>
      </ContentContainer>
    </Container>
  );
}

export default ShowActivity;
