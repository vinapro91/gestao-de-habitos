import { useEffect, useState } from "react";
import { deleteActivity, getActivities } from "../../Services/api";
import CreateActivityForm from "../CreateActivityForm";
import { ButtonDelete, CardLi } from "./style";
const ActivitiesList = ({ id }) => {
  const [activities, setActivities] = useState([]);
  const [length, setLength] = useState(activities.length);

  useEffect(() => {
    updatedActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, length]);

  const updatedActivities = () => {
    getActivities(id).then((response) => setActivities(response.data.results));
  };

  const handleDeleteActivity = (idActivity) => {
    deleteActivity(idActivity).then((response) => console.log(response));
    setActivities(activities.filter((activity) => activity.id !== idActivity));
  };

  return (
    <div>
      <ul>
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <li key={index}>
              {" "}
              {activity.title}
              <ButtonDelete
                onClick={() => {
                  handleDeleteActivity(activity.id);
                }}
              >
                X
              </ButtonDelete>
            </li>
          ))
        ) : (
          <p>Não há atividades para este grupo.</p>
        )}
      </ul>
      <h4>Adicione um atividade</h4>
      <CreateActivityForm
        id={id}
        updateActivity={updatedActivities}
        length={length}
        setLength={setLength}
      />
    </div>
  );
};

export default ActivitiesList;
