import { createContext, useEffect, useState } from "react";
import api, { getUserSubscriptions } from "../../Services/api";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [subscribedGroups, setSubscribedGroups] = useState([]);
  const [category, setCategory] = useState("");
  const [page, setpage] = useState(1);

  useEffect(() => {
    api.get(`/groups/?category=${category}&page=${page}`).then((response) => {
      setGroups(response.data.results);
    });

    updateUserSubscriptions();
  }, [category, page]);

  const updateUserSubscriptions = () => {
    getUserSubscriptions().then((subscriptionsResponse) =>
      setSubscribedGroups(subscriptionsResponse.data)
    );
  };

  const searchByCategory = (searchedTerm) => {
    setCategory(searchedTerm);
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
        searchByCategory,
        addToPage,
        subToPage,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
