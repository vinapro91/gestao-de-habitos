import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { GroupsContext } from "../../Providers/Groups";
import { UserIdContext } from "../../Providers/User_id";
import ProgressBar from "@ramonak/react-progress-bar";
import api from "../../Services/api";
import {
  BodyProfile,
  BoxGroup,
  CardGroup,
  Container,
  Content,
  MetasGroups,
  ProfileDIv,
  ShowGroups,
  Meta,
  ShowMetas,
  BoxProfileTop,
} from "./style";
import { Link } from "react-router-dom";
import { HabitsContext } from "../../Providers/Habits";

const Profile = () => {
  const { userId } = useContext(UserIdContext);
  const { subscribedGroups } = useContext(GroupsContext);
  const { habits, deletUserHabit, updateUserHabits } =
    useContext(HabitsContext);
  const [userInfo, setUserinfo] = useState({});
  useEffect(() => {
    api
      .get(`/users/${userId}/`)
      .then((response) => setUserinfo(response.data))
      .catch((error) => console.log(error));
  }, [userId]);
  const history = useHistory();
  const logout = () => {
    window.location.reload();
    localStorage.clear();
  };
  const handleDelet = (id) => {
    deletUserHabit(id);
    updateUserHabits();
  };

  return (
    <Container>
      <BoxProfileTop>
        <ProfileDIv>
          <h2>Bem Vindo , {userInfo.username}</h2>
          <button onClick={logout}>Sair</button>
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
                  <h3>{group.name}</h3>
                  <p>{group.category}</p>
                </div>
                <details className="descriptionCard">
                  <summary className="txtDescription">Descrição</summary>
                  {group.description}
                </details>
                <ShowMetas>
                  {group.goals.map((goal, indexGoal) => (
                    <Meta key={indexGoal}>
                      <h3>{goal.title}</h3>
                      <p>dificuldade: {goal.difficulty}</p>
                      <div>
                        <p>
                          Progresso:
                          <ProgressBar
                            completed={goal.how_much_achieved}
                            bgColor="#60D272"
                            height="15px"
                            baseBgColor="#EC4F4F"
                            labelColor="#8d8383"
                          />
                        </p>
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
            <h2> Hábitos</h2>
            <button onClick={() => history.push("/createHabit")}>+</button>
          </div>
          <ShowMetas>
            {habits.map((habit, indexHabit) => (
              <Meta habito={true} key={indexHabit}>
                <div>
                  <h3>{habit.title}</h3>
                  <p>Categoria: {habit.category}</p>
                  <p>Frequencia: {habit.frequency}</p>
                  <p>Nivel: {habit.difficulty}</p>
                </div>
                <div className="progress">
                  <p>Progreço</p>
                  <ProgressBar
                    completed={habit.how_much_achieved}
                    bgColor="#60D272"
                    height="15px"
                    width="100%"
                    labelAlignment="center"
                    baseBgColor="#EC4F4F"
                    labelColor="#8d8383"
                  />
                </div>
                <button onClick={() => handleDelet(habit.id)}>X</button>
              </Meta>
            ))}
          </ShowMetas>
        </MetasGroups>
      </BodyProfile>
    </Container>
  );
};

export default Profile;
