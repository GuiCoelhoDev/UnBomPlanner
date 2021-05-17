import React, { useState, useEffect } from "react";

import { Container, ListItem, ActivitiesContainer } from "./styles";
import SectionHeader from "../../components/SectionHeader";

import { Link } from "react-router-dom";
import CheckIcon from "@material-ui/icons/Check";
import AddIcon from "@material-ui/icons/Add";

import { index, update } from "../../services/Activities";

const Activities = ({ history }) => {
  const [todayActivities, setTodayActivities] = useState([]);
  const [activities, setActivities] = useState([]);

  const fetchActivities = async () => {
    const response = await index();
    console.log(response);
    setActivities(response);
  };

  const checkActivity = async (id, isChecked) => {
    const response = await update(id, { checked: isChecked });
    fetchActivities();
    console.log(response);
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <Container>
      <SectionHeader history={history} pageName="Atividades" />
      <ActivitiesContainer>
        <nav>
          <div></div>
          <p className="caption">Atividades de Hoje</p>
          {/* <FilterListIcon /> */}
        </nav>

        <div className="activities-box depth-box">
          <div className="list-container">
            <ul>
              {activities?.map((a) => (
                <ListItem checked={a.value.checked} key={a.id}>
                  <div
                    className="checkbox"
                    onClick={() => checkActivity(a.id, !a.value.checked)}
                  >
                    <CheckIcon />
                  </div>
                  <Link to={`/activity/${a.id}`} className="name smaller-text">
                    {a.value.name}
                  </Link>
                  <div className="tag">{a.value.associatedDiscipline}</div>
                </ListItem>
              ))}
            </ul>
          </div>
          <Link to="/activity/new" className="add-activity">
            <AddIcon /> Adicionar Nova Atividade
          </Link>
        </div>
      </ActivitiesContainer>

      <ActivitiesContainer>
        <nav>
          <div></div>
          <p className="caption">Demais Atividades</p>
          {/* <FilterListIcon /> */}
        </nav>

        <div className="activities-box depth-box">
          <div className="list-container">
            <ul>
              {activities?.map((a) => (
                <ListItem checked={a.value.checked} key={a.id}>
                  <div
                    className="checkbox"
                    onClick={() => checkActivity(a.id, !a.value.checked)}
                  >
                    <CheckIcon />
                  </div>
                  <Link to={`/activity/${a.id}`} className="name smaller-text">
                    {a.value.name}
                  </Link>
                  <div className="tag">{a.value.associatedDiscipline}</div>
                </ListItem>
              ))}
            </ul>
          </div>
          <Link to="/activity/new" className="add-activity">
            <AddIcon /> Adicionar Nova Atividade
          </Link>
        </div>
      </ActivitiesContainer>
    </Container>
  );
};

export default Activities;
