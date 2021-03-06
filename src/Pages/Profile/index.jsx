import { useContext, useEffect, useState } from "react";
import { GroupsContext } from "../../Providers/Groups";
import { UserIdContext } from "../../Providers/User_id";
import ProgressBar from "@ramonak/react-progress-bar";
import api, { attHabits, attGoals } from "../../Services/api";

import {
  BodyProfile,
  BoxGroup,
  CardGroup,
  Container,
  MetasGroups,
  ProfileDIv,
  ShowGroups,
  Meta,
  ShowMetas,
  BoxProfileTop,
  ButtonPlus,
  PointerOnDiv,
} from "./style";
import { Link } from "react-router-dom";
import { HabitsContext } from "../../Providers/Habits";
import CreateHabitForm from "../../Components/CreateHabitForm/";
import Button from "../../Components/Button";

const Profile = () => {
  const { userId } = useContext(UserIdContext);
  const { subscribedGroups, updateUserSubscriptions } =
    useContext(GroupsContext);
  const { habits, deletUserHabit, updateUserHabits } =
    useContext(HabitsContext);
  const [open, setOpen] = useState(false);
  const [userInfo, setUserinfo] = useState({});
  const [response, setResponse] = useState({});

  useEffect(() => {
    api
      .get(`/users/${userId}/`)
      .then((response) => setUserinfo(response.data))
      .catch((error) => console.log(error));
  }, [userId]);

  useEffect(() => {
    if (response.status === 200) {
      response.config?.url &&
        response.config.url.startsWith("habits/") &&
        updateUserHabits();

      response.config?.url &&
        response.config.url.startsWith("/goals/") &&
        updateUserSubscriptions();
    }

    // eslint-disable-next-line
  }, [response]);

  const logout = () => {
    window.location.reload();
    localStorage.clear();
  };

  const handleDelet = (id) => {
    deletUserHabit(id);
    updateUserHabits();
  };
  const handleToggleModal = () => {
    setOpen(!open);
  };
  const updateProgressHabits = (id, progress) => {
    const updateProgres = progress < 100 && progress + 10;
    const updateAchieved = progress === 100 ? true : false;
    const data = {
      how_much_achieved: updateProgres,
      achieved: updateAchieved,
    };
    attHabits(id, data).then((habitsResponse) => setResponse(habitsResponse));
  };

  const updateProgressGoals = (id, progress) => {
    const updateProgres = progress < 100 && progress + 10;
    const updateAchieved = progress === 100 ? true : false;
    const data = {
      how_much_achieved: updateProgres,
      achieved: updateAchieved,
    };
    attGoals(id, data).then((goalsResponse) => setResponse(goalsResponse));
  };

  return (
    <Container>
      <BoxProfileTop>
        <ProfileDIv>
          <h2>Bem Vindo , {userInfo.username}</h2>
          <Button onClick={logout}>Sair</Button>
        </ProfileDIv>
      </BoxProfileTop>
      <BodyProfile>
        <BoxGroup>
          <div>
            <h2>Grupos</h2>
            <p>
              <Link to="/groups">Mostrar mais grupos</Link>
            </p>
          </div>
          <ShowGroups>
            {subscribedGroups.map((group, index) => (
              <CardGroup key={index}>
                <div className="nameCategoryGroup">
                  <Link to={`/groups/${group.id}`} key={group.id}>
                    <h3>{group.name}</h3>
                  </Link>
                  <p>{group.category}</p>
                </div>
                <details className="descriptionCard">
                  <summary className="txtDescription">Descri????o</summary>
                  {group.description}
                </details>
                <ShowMetas>
                  {group.goals.map((goal, indexGoal) => (
                    <Meta key={`${index}-${indexGoal}`}>
                      <h3>{goal.title}</h3>
                      <p>dificuldade: {goal.difficulty}</p>
                      <div>
                        <PointerOnDiv
                          onClick={() =>
                            updateProgressGoals(goal.id, goal.how_much_achieved)
                          }
                        >
                          Progresso:
                          <ProgressBar
                            completed={goal.how_much_achieved}
                            bgColor="#74c21a"
                            height="15px"
                            labelAlignment="left"
                            baseBgColor="#237c95"
                            labelColor="#fcfbfb"
                          />
                        </PointerOnDiv>
                      </div>
                    </Meta>
                  ))}
                </ShowMetas>
              </CardGroup>
            ))}
          </ShowGroups>
        </BoxGroup>

        <MetasGroups>
          <div className="titleMetas">
            <h2> H??bitos</h2>

            <ButtonPlus onClick={handleToggleModal}>+</ButtonPlus>
          </div>
          <ShowMetas habits>
            {habits.map((habit, indexHabit) => (
              <Meta
                habito={true}
                onClick={() =>
                  updateProgressHabits(habit.id, habit.how_much_achieved)
                }
                key={`habit-${indexHabit}`}
              >
                <div>
                  <h3>{habit.title}</h3>
                  <p>Categoria: {habit.category}</p>
                  <p>Frequencia: {habit.frequency}</p>
                  <p>Nivel: {habit.difficulty}</p>
                </div>
                <div className="progress">
                  <p>Progresso</p>
                  <PointerOnDiv>
                    <ProgressBar
                      completed={habit.how_much_achieved}
                      bgColor="#74c21a"
                      height="15px"
                      width="100px"
                      labelAlignment="left"
                      baseBgColor="#237c95"
                      labelColor="#fcfbfb"
                    />
                  </PointerOnDiv>
                </div>
                <button onClick={() => handleDelet(habit.id)}>X</button>
              </Meta>
            ))}
          </ShowMetas>
        </MetasGroups>
      </BodyProfile>
      <CreateHabitForm open={open} handleToggleModal={handleToggleModal} />
    </Container>
  );
};

export default Profile;
