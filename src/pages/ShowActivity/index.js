import React, { useState, useEffect, useCallback } from "react";

import { Container, ContentContainer } from "./styles";
import ActivityForm from "../../components/ActivityForm";
import SectionHeader from "../../components/SectionHeader";

import { Link, useParams } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";

import { show } from "../../services/Activities";

function ShowActivity({ history }) {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchActivity = useCallback(async () => {
    setLoading(true);
    const response = await show(id);
    setData(response);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetchActivity();
  }, [fetchActivity]);

  return (
    <Container>
      <SectionHeader
        history={history}
        pageName="Atividade"
        path="/activities"
      />
      <ContentContainer className="depth-box">
        {loading ? (
          <></>
        ) : data ? (
          <>
            <header>
              <h3 className="box-title">{data?.name}</h3>
              <Link to={`/activity/${id}/edit`}>
                <EditIcon />
              </Link>
            </header>
            <ActivityForm
              readOnly={true}
              submissionDate={data?.submissionDate}
              realizationDate={data?.realizationDate}
              associatedDiscipline={data?.associatedDiscipline}
              activityType={data?.activityType}
              description={data?.description}
            />
          </>
        ) : (
          <p className="smaller-text">Esta página não existe :(</p>
        )}
      </ContentContainer>
    </Container>
  );
}

export default ShowActivity;
