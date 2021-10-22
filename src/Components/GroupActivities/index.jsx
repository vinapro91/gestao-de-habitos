import { useContext, useEffect, useState } from "react";
import { UserIdContext } from "../../Providers/User_id";
import { deleteActivity } from "../../Services/api";
import { toast } from "react-toastify";
import toastOptions from "../../Utils/toastOptions";
import ActivityCreateModal from "../ActivityCreateModal";
import dateFormatter from "../../Utils/dateFormatter";
import { BoxDetails, ButtonAddGroup, ButtonRemoveGroup } from "./styles";

const GroupActivities = ({ group, updateGroup }) => {
  const { userId } = useContext(UserIdContext);

  const [isSubscribed, setIsSubscribed] = useState(false);

  const [open, setOpen] = useState(false);

  const [response, setresponse] = useState({});

  useEffect(() => {
    setIsSubscribed(group.users_on_group.some((user) => user.id === userId));

    // eslint-disable-next-line
  }, [group]);

  useEffect(() => {
    if (response.status === 204) {
      const message = "Atividade removida com sucesso!";
      toast.success(message, toastOptions);

      updateGroup();
    } else if (response.status >= 400) {
      const message = "Erro desconhecido";
      toast.error(message, toastOptions);
    }

    // eslint-disable-next-line
  }, [response]);

  const handleToggleModal = () => {
    setOpen(!open);
  };

  const handleRemoveActivity = (id) => {
    deleteActivity(id).then((activityResponse) =>
      setresponse(activityResponse)
    );
  };

  return (
    <details>
      <summary>
        <div>
          Atividades
          {isSubscribed && (
            <ButtonAddGroup onClick={handleToggleModal}>+</ButtonAddGroup>
          )}
        </div>
      </summary>

      <BoxDetails>
        <ul>
          {group.activities.length > 0 ? (
            group.activities.map((activity, index) => (
              <li key={index}>
                {`${activity.title} (${dateFormatter(
                  activity.realization_time
                )})`}

                {isSubscribed && (
                  <ButtonRemoveGroup
                    onClick={() => handleRemoveActivity(activity.id)}
                  >
                    -
                  </ButtonRemoveGroup>
                )}
              </li>
            ))
          ) : (
            <li>Não há atividades para este grupo.</li>
          )}
        </ul>
      </BoxDetails>

      <ActivityCreateModal
        groupId={group.id}
        open={open}
        handleToggleModal={handleToggleModal}
        updateGroup={updateGroup}
      />
    </details>
  );
};

export default GroupActivities;
