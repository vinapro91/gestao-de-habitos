import { createContext, useEffect, useState } from "react";
import api, { getUserSubscriptions } from "../../Services/api";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [subscribedGroups, setSubscribedGroups] = useState([]);
  const [page, setpage] = useState(1);

  useEffect(() => {
    api.get(`/groups/?page=${page}`).then((response) => {
      setGroups(response.data.results);
    });

    updateUserSubscriptions();
  }, [page]);

  const updateUserSubscriptions = () => {
    getUserSubscriptions().then((subscriptionsResponse) =>
      setSubscribedGroups(subscriptionsResponse.data)
    );
  };

  const addToPage = () => {
    setpage(page + 1);
  };

  const subToPage = () => {
    if (page > 1) {
      setpage(page - 1);
    }
  };

  return (
    <GroupsContext.Provider
      value={{
        groups,
        subscribedGroups,
        updateUserSubscriptions,
        addToPage,
        subToPage,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
