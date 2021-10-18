import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { GroupsContext } from "../../Providers/Groups";
import { UserIdContext } from "../../Providers/User_id";
import ProgressBar from "@ramonak/react-progress-bar";
import api from "../../Services/api";
import { Container, Content, ProfileDIv } from "./style";
import { Link } from "react-router-dom";

const Profile = () => {
  const { userId } = useContext(UserIdContext);
  const { subscribedGroups } = useContext(GroupsContext);

  const [userInfo, setUserinfo] = useState({});
  useEffect(() => {
    api
      .get(`/users/${userId}/`)
      .then((response) => setUserinfo(response.data))
      .catch((error) => console.log(error));
  }, [userId]);
  const history = useHistory();

  const logout = () => {
    history.push("/");
    localStorage.clear();
  };
  const showAllGroups = () => {
    history.push("/groups");
  };
  return (
    <Container>
      <ProfileDIv>
        <h2>Bem Vindo , {userInfo.username}</h2>
        <button onClick={logout}>Sair</button>
      </ProfileDIv>

      <div>
        <h2>Grupos</h2>
        <p>
          <Link to="/groups">Mostrar mais grupos</Link>
        </p>
        <ul>
          {subscribedGroups.map((group, index) => (
            <li key={index}>
              <p>Nome do grupo : {group.name}</p>
              <p>Categoria : {group.category}</p>

              <p>Descrição : {group.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2> Metas</h2>
        <ul>
          {subscribedGroups.map((group, indexGoup) => (
            <ul key={indexGoup}>
              {group.goals.map((goal, indexGoals) => (
                <li key={indexGoals}>
                  <p>Meta: {goal.title}</p>
                  <p>dificuldade: {goal.difficulty}</p>
                  <Content>
                    <ProgressBar
                      completed={goal.how_much_achieved}
                      bgColor="#60D272"
                      height="25px"
                      width="80%"
                      labelAlignment="center"
                      baseBgColor="#EC4F4F"
                      labelColor="#8d8383"
                    />
                  </Content>
                  <p>Progresso: {goal.how_much_achieved}</p>
                </li>
              ))}
            </ul>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Profile;
