import { useContext, useEffect, useState } from "react";
import { GroupsContext } from "../../Providers/Groups";
import { UserIdContext } from "../../Providers/User_id";
import ProgressBar from "@ramonak/react-progress-bar";
import api, { attHabits } from "../../Services/api";
import {
  BodyProfile,
  BoxGroup,
  CardGroup,
  Container,
  MetasGroups,
  ProfileDIv,
  ShowGroups,
  ShowMetas,
  BoxProfileTop,
} from "./style";
import { Link } from "react-router-dom";
import { HabitsContext } from "../../Providers/Habits";
import CreateHabitForm from "../../Components/CreateHabitForm/";
const Profile = () => {
  const { userId } = useContext(UserIdContext);
  const { subscribedGroups } = useContext(GroupsContext);
  const { habits, deletUserHabit, updateUserHabits } =
    useContext(HabitsContext);
  const [open, setOpen] = useState(false);
  const [userInfo, setUserinfo] = useState({});
  useEffect(() => {
    api
      .get(`/users/${userId}/`)
      .then((response) => setUserinfo(response.data))
      .catch((error) => console.log(error));
  }, [userId]);

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
    console.log(data);
    updateUserHabits();
    attHabits(id, data);
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
                  <Link to={`/groups/${group.id}`} key={group.id}>
                    <h3>{group.name}</h3>
                  </Link>
                  <p>{group.category}</p>
                </div>
                <div className="descriptionCard">
                  <span className="txtDescription">Descrição:</span>
                  {group.description}
                </div>
                {group.goals.map((goal, indexGoal) => (
                  <>
                    <div key={`${index}-${indexGoal}`}>
                      <h3>{goal.title}</h3>
                      <p>dificuldade: {goal.difficulty}</p>
                      <div>
                        <div>
                          Progresso:
                          <ProgressBar
                            completed={goal.how_much_achieved}
                            bgColor="#60D272"
                            height="15px"
                            baseBgColor="#EC4F4F"
                            labelColor="#8d8383"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </CardGroup>
            ))}
          </ShowGroups>
        </BoxGroup>

        <MetasGroups>
          <div className="titleMetas">
            <h2> Hábitos</h2>
            <button onClick={handleToggleModal}>+</button>
          </div>
          <ShowMetas>
            {habits.map((habit, indexHabit) => (
              <div
                onClick={() =>
                  updateProgressHabits(habit.id, habit.how_much_achieved)
                }
                key={`habit-${indexHabit}`}
              >
                <div>Habito: {habit.title}</div>
                <div>Categoria: {habit.category}</div>
                <div>Frequencia: {habit.frequency}</div>
                <div>Dificuldade: {habit.difficulty}</div>
                <ProgressBar
                  completed={habit.how_much_achieved}
                  bgColor="#60D272"
                  height="25px"
                  width="80%"
                  labelAlignment="center"
                  baseBgColor="#EC4F4F"
                  labelColor="#8d8383"
                />
                <button onClick={() => handleDelet(habit.id)}>X</button>
              </div>
            ))}
          </ShowMetas>
        </MetasGroups>
      </BodyProfile>
      <CreateHabitForm open={open} handleToggleModal={handleToggleModal} />
    </Container>
  );
};

export default Profile;
