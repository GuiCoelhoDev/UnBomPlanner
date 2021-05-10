import React, { useState } from "react";

import { Container, ListItem, ActivitiesContainer } from "./styles";
import SectionHeader from "../../components/SectionHeader";

import { Link } from "react-router-dom";
import FilterListIcon from "@material-ui/icons/FilterList";
import CheckIcon from "@material-ui/icons/Check";
import AddIcon from "@material-ui/icons/Add";

const Activities = ({ history }) => {
  const [checkedBox, setCheckedBox] = useState(false);
  return (
    <Container>
      <SectionHeader history={history} pageName="Atividades" />
      <ActivitiesContainer>
        <nav>
          <div></div>
          <p className="caption">Atividades de Hoje</p>
          <FilterListIcon />
        </nav>

        <div className="activities-box depth-box">
          <div className="list-container">
            <ul>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <ListItem checked={checkedBox} key={i}>
                  <div
                    className="checkbox"
                    onClick={() => setCheckedBox((c) => !c)}
                  >
                    <CheckIcon />
                  </div>
                  <Link to={`/activity/${i}`} className="name smaller-text">
                    Montar telas no Figma
                  </Link>
                  <div className="tag">IHC</div>
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
          <FilterListIcon />
        </nav>

        <div className="activities-box depth-box">
          <div className="list-container">
            <ul>
              {[1].map((i) => (
                <ListItem to={`/activity/${i}`} checked={checkedBox} key={i}>
                  <div
                    className="checkbox"
                    onClick={() => setCheckedBox((c) => !c)}
                  >
                    <CheckIcon />
                  </div>
                  <Link to={`/activity/${i}`} className="name smaller-text">
                    Montar telas no Figma
                  </Link>
                  <div className="tag">IHC</div>
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
