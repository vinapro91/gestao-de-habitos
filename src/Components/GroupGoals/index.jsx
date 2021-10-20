import { useContext, useEffect, useState } from "react";
import { UserIdContext } from "../../Providers/User_id";
import GoalCreateModal from "../GoalCreateModal";
import { BoxDetails } from "./styles";

const GroupGoals = ({ group, updateGroup }) => {
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
          Metas
          {isSubscribed && (
            <button onClick={handleToggleModal}>Adicionar</button>
          )}
        </div>
      </summary>

      <BoxDetails>
        <ul>
          {group.goals.length > 0 ? (
            group.goals.map((goal, index) => (
              <li key={index}>{`${goal.title} (${goal.difficulty})`}</li>
            ))
          ) : (
            <li>Não há metas para este grupo.</li>
          )}
        </ul>
      </BoxDetails>

      <GoalCreateModal
        groupId={group.id}
        open={open}
        handleToggleModal={handleToggleModal}
        updateGroup={updateGroup}
      />
    </details>
  );
};

export default GroupGoals;
