import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { GroupsContext } from "../../Providers/Groups";
import { UserIdContext } from "../../Providers/User_id";
import api from "../../Services/api";

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
    <>
      <div>
        <h1>Bem Vindo , {userInfo.username}</h1>
        <button onClick={() => logout()}>Sair</button>
      </div>

      <div>
        <h2>Grupos</h2>
        <p>
          <button onClick={showAllGroups}>Mostrar mais grupos</button>
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
          {subscribedGroups.map((group, index) => (
            <ul key={index}>
              {group.goals.map((goal) => (
                <li key={index}>
                  <p>Meta: {goal.title}</p>
                  <p>dificuldade: {goal.difficulty}</p>
                  <p>Progresso: {goal.how_much_achieved}</p>
                </li>
              ))}
            </ul>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Profile;
