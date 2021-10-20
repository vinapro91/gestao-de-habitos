import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import toastOptions from "../../Utils/toastOptions";
import {
  getGroup,
  subscribeToAGroup,
  unsubscribeFromAGroup,
} from "../../Services/api";
import { GroupsContext } from "../../Providers/Groups";
import {
  Box,
  BoxDetails,
  ContainerGroup,
  BoxButton,
  HeaderGroup,
  BodyGroup,
  BackGroundHeader,
} from "./style";

const isUserSubscribed = (subscribedGroups, group) =>
  subscribedGroups.some((subscribedGroup) => subscribedGroup.id === group.id);

const Group = () => {
  const { subscribedGroups, updateUserSubscriptions } =
    useContext(GroupsContext);

  const [group, setGroup] = useState({});

  const [reponse, setResponse] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const [isSubscribed, setIsSubscribed] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    getGroup(id).then((response) => {
      setGroup({ ...response.data });
      setIsLoading(false);
    });

    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (reponse.status === 200) {
      const message = "Usario inscrito no grupo com sucesso!";
      toast.success(message, toastOptions);

      updateUserSubscriptions();
    } else if (reponse.status === 204) {
      const message = "Usario desinscrito do grupo com sucesso!";
      toast.success(message, toastOptions);

      updateUserSubscriptions();
    } else if (reponse.status >= 400) {
      const message =
        reponse.data.message === "User already on group"
          ? "Usuário já cadastrado no grupo."
          : reponse.data.message;
      toast.error(message, toastOptions);
    }

    // eslint-disable-next-line
  }, [reponse]);

  useEffect(() => {
    setIsSubscribed(isUserSubscribed(subscribedGroups, group));
  }, [subscribedGroups, group]);

  const handleSubscription = (groupId) => {
    subscribeToAGroup(groupId).then((subscribeResponse) =>
      setResponse(subscribeResponse)
    );
  };

  const handleUnsubscription = (groupId) => {
    unsubscribeFromAGroup(groupId).then((unsubscribeResponse) =>
      setResponse(unsubscribeResponse)
    );
  };

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <ContainerGroup>
      <BackGroundHeader>
        <HeaderGroup>
          <h1>{group.name}</h1>
          <p>{group.description}</p>
          <p>{group.category}</p>
          <p>{`Criador: ${group.creator.username} (${group.creator.email})`}</p>
        </HeaderGroup>
      </BackGroundHeader>

      <BodyGroup>
        <Box>
          <details>
            <summary>Membros</summary>
            <BoxDetails>
              <ul>
                {group.users_on_group.map((user, index) => (
                  <li key={index}>{`${user.username} (${user.email})`}</li>
                ))}
              </ul>
            </BoxDetails>
          </details>
        </Box>

        <Box>
          <details>
            <summary>Metas</summary>
            <BoxDetails>
              <ul>
                {group.goals.length > 0 ? (
                  group.goals.map((goal, index) => (
                    <li key={index}>{`${goal.title} (${goal.difficulty})`}</li>
                  ))
                ) : (
                  <p>Não há metas para este grupo.</p>
                )}
              </ul>
            </BoxDetails>
          </details>
        </Box>

        <Box>
          <details>
            <summary>Atividades</summary>
            <BoxDetails>
              <ul>
                {group.activities.length > 0 ? (
                  group.activities.map((activity, index) => (
                    <li
                      key={index}
                    >{`${activity.title} (${activity.realization_time})`}</li>
                  ))
                ) : (
                  <p>Não há atividades para este grupo.</p>
                )}
              </ul>
            </BoxDetails>
          </details>
        </Box>
      </BodyGroup>

      <BoxButton>
        {isSubscribed ? (
          <button onClick={() => handleUnsubscription(group.id)}>
            Desinscreva-se
          </button>
        ) : (
          <button onClick={() => handleSubscription(group.id)}>
            Inscreva-se
          </button>
        )}
      </BoxButton>
    </ContainerGroup>
  );
};

export default Group;
