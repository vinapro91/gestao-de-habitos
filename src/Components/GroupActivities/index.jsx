import { useContext, useEffect, useState } from "react";
import { UserIdContext } from "../../Providers/User_id";
import ActivityCreateModal from "../ActivityCreateModal";
import dateFormatter from "../../Utils/dateFormatter";
import { BoxDetails } from "./styles";

const GroupActivities = ({ group, updateGroup }) => {
  const { userId } = useContext(UserIdContext);

  const [isSubscribed, setIsSubscribed] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsSubscribed(group.users_on_group.some((user) => user.id === userId));

    // eslint-disable-next-line
  }, [group]);

  const handleToggleModal = () => {
    setOpen(!open);
  };

  return (
    <details>
      <summary>
        <div>
          Atividades
          {isSubscribed && (
            <button onClick={handleToggleModal}>Adicionar</button>
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
