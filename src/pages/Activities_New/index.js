import {
  Container,
  TasksContainer,
  NavTasksContainer,
  Task,
  ActivitiesBox,
  ActivitiesContainer
} from "./styles";
import { ReactComponent as Agenda } from "../../assets/Agenda.svg";

const Activities = () => {
  return (
    <Container>
      <nav>
        {/* Voltar e Atividades */}
        <p className="subtitle">Atividades</p>
      </nav>

      <ActivitiesContainer className="today-activities-container">
        <nav>
          <p className="activities-title">Atividades de Hoje</p>
        </nav>
        <ActivitiesBox>

        </ActivitiesBox>
      </ActivitiesContainer>

      <ActivitiesContainer className="other-activities-container">
        <nav>
          <p className="activities-title">Demais Atividades</p>
        </nav>

        <ActivitiesBox>
            
        </ActivitiesBox>
      </ActivitiesContainer>
    </Container>
  );
};

export default Activities;
