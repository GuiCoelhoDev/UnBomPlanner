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
    const today = new Date();
    today.setHours(0,0,0,0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0,0,0,0);
    let tempArray = response.filter((activity) => {
      return (activity.realizationDate >= today && activity.realizationDate < tomorrow) ||
       (activity.submissionDate >= today && activity.submissionDate < tomorrow)
    });
    let temp2Array = response.filter((activity) => {
      return !(activity.realizationDate >= today && activity.realizationDate < tomorrow) ||
       (activity.submissionDate >= today && activity.submissionDate < tomorrow)
    });
    setTodayActivities(tempArray);
    setActivities(temp2Array);
  };

  const checkActivity = async (id, isChecked) => {
    await update(id, { checked: isChecked });
    fetchActivities();
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <Container>
      <SectionHeader history={history} pageName="Atividades" path="/" />
      <ActivitiesContainer>
        <nav>
          <div></div>
          <p className="caption">Atividades de Hoje</p>
          {/* <FilterListIcon /> */}
        </nav>

        <div className="activities-box depth-box">
          <div className="list-container">
            <ul>
              {todayActivities.length > 0 ? (
                todayActivities?.map((a) => (
                  <ListItem checked={a.value.checked} key={a.id}>
                    <div
                      className="checkbox"
                      onClick={() => checkActivity(a.id, !a.value.checked)}
                    >
                      <CheckIcon />
                    </div>
                    <Link
                      to={`/activity/${a.id}`}
                      className="name smaller-text"
                    >
                      {a.value.name}
                    </Link>
                    {a.value.associatedDiscipline ? (
                      <div className="tag">
                        {a?.value?.associatedDiscipline}
                      </div>
                    ) : (
                      ""
                    )}
                  </ListItem>
                ))
              ) : (
                <p className="smaller-text">Não há atividades para hoje :)</p>
              )}
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
              {activities.length > 0 ? (
                activities?.map((a) => (
                  <ListItem checked={a?.value?.checked} key={a.id}>
                    <div
                      className="checkbox"
                      onClick={() => checkActivity(a?.id, !a?.value?.checked)}
                    >
                      <CheckIcon />
                    </div>
                    <Link
                      to={`/activity/${a?.id}`}
                      className="name smaller-text"
                    >
                      {a?.value?.name}
                    </Link>
                    {a.value.associatedDiscipline ? (
                      <div className="tag">
                        {a?.value?.associatedDiscipline}
                      </div>
                    ) : (
                      ""
                    )}
                  </ListItem>
                ))
              ) : (
                <p className="smaller-text">Não há nenhuma atividade :)</p>
              )}
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
