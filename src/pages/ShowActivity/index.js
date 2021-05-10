import React from "react";

import { Container, ContentContainer } from "./styles";
import ActivityForm from "../../components/ActivityForm";
import SectionHeader from "../../components/SectionHeader";

import { Link, useParams } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";

function ShowActivity({ history }) {
  const { id } = useParams();

  return (
    <Container>
      <SectionHeader history={history} pageName="Atividade" />
      <ContentContainer className="depth-box">
        <header>
          <h3 className="box-title">Trabalho de OAC</h3>
          <Link to={`/activity/${id}/edit`}>
            <EditIcon />
          </Link>
        </header>
        <ActivityForm readOnly={true} />
      </ContentContainer>
    </Container>
  );
}

export default ShowActivity;
