import { useContext, useEffect, useState } from "react";
import { subscribeToAGroup, unsubscribeFromAGroup } from "../../Services/api";
import { UserIdContext } from "../../Providers/User_id";
import { toast } from "react-toastify";
import toastOptions from "../../Utils/toastOptions";

const GroupToggleSubscription = ({ group, updateGroup }) => {
  const { userId } = useContext(UserIdContext);

  const [isSubscribed, setIsSubscribed] = useState(false);

  const [response, setResponse] = useState({});

  useEffect(() => {
    if (response.status === 200) {
      const message =
        response.data.message === "User inserted on group"
          ? "Usuário inscrito no grupo com sucesso!"
          : response.message;
      toast.success(message, toastOptions);

      updateGroup();
    } else if (response.status === 204) {
      const message = "Usuário desinscrito do grupo com sucesso!";
      toast.success(message, toastOptions);

      updateGroup();
    } else if (response.status >= 400) {
      const message =
        response.data.message === "User already on group"
          ? "Usuário já cadastrado no grupo."
          : response.data.message;
      toast.error(message, toastOptions);
    }

    // eslint-disable-next-line
  }, [response]);

  useEffect(() => {
    setIsSubscribed(group.users_on_group.some((user) => user.id === userId));

    // eslint-disable-next-line
  }, [group]);

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

  return (
    <>
      {isSubscribed ? (
        <button onClick={() => handleUnsubscription(group.id)}>
          Desinscreva-se
        </button>
      ) : (
        <button onClick={() => handleSubscription(group.id)}>
          Inscreva-se
        </button>
      )}
    </>
  );
};

export default GroupToggleSubscription;
