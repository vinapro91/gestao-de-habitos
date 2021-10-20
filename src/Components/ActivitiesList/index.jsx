import { useEffect, useState } from "react";
import { getActivities } from "../../Services/api";
const ActivitiesList = ({ id }) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    updatedActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updatedActivities = () => {
    getActivities(id).then((response) => setActivities(response.data.results));
  };

  return (
    <div>
      <ul>
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <li key={index}> {activity.title} </li>
          ))
        ) : (
          <p>Não há atividades para este grupo.</p>
        )}
      </ul>
    </div>
  );
};

export default ActivitiesList;
