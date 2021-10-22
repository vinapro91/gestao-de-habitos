import { useContext, useEffect, useState } from "react";
import { UserIdContext } from "../../Providers/User_id";
import { deleteGoal } from "../../Services/api";
import { toast } from "react-toastify";
import toastOptions from "../../Utils/toastOptions";
import GoalCreateModal from "../GoalCreateModal";
import { BoxDetails, ButtonAddGroup, ButtonRemoveGroup } from "./styles";

const GroupGoals = ({ group, updateGroup }) => {
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
      const message = "Meta removida com sucesso!";
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

  const handleRemoveGoal = (id) => {
    deleteGoal(id).then((goalResponse) => setresponse(goalResponse));
  };

  return (
    <details>
      <summary>
        <div>
          Metas{" "}
          {isSubscribed && (
            <ButtonAddGroup onClick={handleToggleModal}>+</ButtonAddGroup>
          )}
        </div>
      </summary>

      <BoxDetails>
        <ul>
          {group.goals.length > 0 ? (
            group.goals.map((goal, index) => (
              <li key={index}>
                {`${goal.title} (${goal.difficulty})`}

                {isSubscribed && (
                  <ButtonRemoveGroup onClick={() => handleRemoveGoal(goal.id)}>
                    -
                  </ButtonRemoveGroup>
                )}
              </li>
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
