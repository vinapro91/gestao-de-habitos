import { useContext, useEffect, useState } from "react";
import { GroupsContext } from "../../Providers/Groups";
import { subscribeToAGroup, unsubscribeFromAGroup } from "../../Services/api";
import { toast } from "react-toastify";
import toastOptions from "../../Utils/toastOptions";
import { Card } from "./styles";

const isUserSubscribed = (subscribedGroups, group) =>
  subscribedGroups.some((subscribedGroup) => subscribedGroup.id === group.id);

const GroupCard = ({ group }) => {
  const [reponse, setResponse] = useState({});

  const { subscribedGroups, updateUserSubscriptions } =
    useContext(GroupsContext);

  const [isSubscribed, setIsSubscribed] = useState(
    isUserSubscribed(subscribedGroups, group)
  );

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

    // eslint-disable-next-line
  }, [subscribedGroups]);

  const handleSubscription = (id) => {
    subscribeToAGroup(id).then((subscribeResponse) =>
      setResponse(subscribeResponse)
    );
  };

  const handleUnsubscription = (id) => {
    unsubscribeFromAGroup(id).then((unsubscribeResponse) =>
      setResponse(unsubscribeResponse)
    );
  };

  return (
    <Card>
      <p>Nome do grupo : {group.name}</p>
      <p>Categoria : {group.category}</p>
      <p>Descrição :{group.description}</p>
      <p>Quantidade de membros : {group.users_on_group.length}</p>

      {isSubscribed ? (
        <button onClick={() => handleUnsubscription(group.id)}>
          Descreva-se
        </button>
      ) : (
        <button onClick={() => handleSubscription(group.id)}>
          Inscreva-se
        </button>
      )}
    </Card>
  );
};

export default GroupCard;
