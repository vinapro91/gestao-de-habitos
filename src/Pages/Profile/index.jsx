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
                <div className="descriptionCard">
                  <p>
                    <span className="txtDescription">Descrição:</span>
                    {group.description}
                  </p>
                </div>
              </CardGroup>
            ))}
          </ShowGroups>
        </BoxGroup>

        <MetasGroups>
          <div className="titleMetas">
            <h2> Metas</h2>
          </div>
          <ShowMetas>
            {subscribedGroups.map((group, indexGoup) => (
              <ul key={indexGoup}>
                {group.goals.map((goal, indexGoals) => (
                  <Meta key={indexGoals}>
                    <h3>{goal.title}</h3>
                    <p>dificuldade: {goal.difficulty}</p>
                    <Content>
                      <p>
                        Progresso:
                        <ProgressBar
                          completed={goal.how_much_achieved}
                          bgColor="#60D272"
                          height="25px"
                          width="80%"
                          labelAlignment="center"
                          baseBgColor="#EC4F4F"
                          labelColor="#8d8383"
                        />
                      </p>
                    </Content>
                  </Meta>
                ))}
              </ul>
            ))}
          </ShowMetas>
        </MetasGroups>
      </BodyProfile>
    </Container>
  );
};

export default Profile;
