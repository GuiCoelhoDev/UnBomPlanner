import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FilterListIcon from "@material-ui/icons/FilterList";
import CheckIcon from "@material-ui/icons/Check";
import AddIcon from "@material-ui/icons/Add";

import { index, create } from "../../services/Activities"

import { Container, ListItem, ActivitiesContainer } from "./styles";

const Activities = () => {

  const [activities, setActivities] = useState([]);
  const [checkedBox, setCheckedBox] = useState(false);

  const fetchActivities = async () => {
    const response = await index();
    setActivities(response);
  }

  useEffect(() => {
    fetchActivities();
  }, []
  );

  const createActivity = async () => {
    try {
      await create({name: 'Estudo'});
      await fetchActivities();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <nav className="page-header">
        <Link to="/" className="back-link">
          <ArrowBackIcon />
          Voltar
        </Link>
        <p className="subtitle">Atividades</p>
      </nav>

      <ActivitiesContainer>
        <nav>
          <div></div>
          <p className="caption">Atividades de Hoje</p>
          <FilterListIcon />
        </nav>

        <div className="activities-box">
          <div className="list-container">
            <ul>
              {activities?.map((i) => (
                <ListItem
                  onClick={() => setCheckedBox((c) => !c)}
                  checked={checkedBox}
                  key={i.id}
                >
                  <div className="checkbox">
                    <CheckIcon />
                  </div>
                  <span className="name smaller-text">
                    {i.value.name}
                  </span>
                  <div className="tag">IHC</div>
                </ListItem>
              ))}
            </ul>
          </div>
          <div className="add-activity" onClick={() => createActivity()}>
            <AddIcon /> Adicionar Nova Atividade
          </div>
        </div>
      </ActivitiesContainer>

      <ActivitiesContainer>
        <nav>
          <div></div>
          <p className="caption">Demais Atividades</p>
          <FilterListIcon />
        </nav>

        <div className="activities-box">
          <div className="list-container">
            <ul>
              <ListItem
                onClick={() => setCheckedBox((c) => !c)}
                checked={checkedBox}
              >
                <div className="checkbox">
                  <CheckIcon />
                </div>
                <span className="name smaller-text">Montar telas no Figma</span>
                <div className="tag">IHC</div>
              </ListItem>
            </ul>
          </div>
          <div className="add-activity">
            <AddIcon /> Adicionar Nova Atividade
          </div>
        </div>
      </ActivitiesContainer>
    </Container>
  );
};

export default Activities;
