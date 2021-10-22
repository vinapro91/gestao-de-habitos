import { createContext, useEffect, useState } from "react";
import api, { getUserSubscriptions } from "../../Services/api";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [subscribedGroups, setSubscribedGroups] = useState([]);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState({});
  const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  useEffect(() => {
    setPage(1);

    api.get(`/groups/?category=${category}&page=1`).then((response) => {
      setResponse(response);
    });

    // eslint-disable-next-line
  }, [category]);

  useEffect(() => {
    api.get(`/groups/?category=${category}&page=${page}`).then((response) => {
      setResponse(response);
    });

    // eslint-disable-next-line
  }, [page]);

  const updateUserSubscriptions = () => {
    getUserSubscriptions().then((subscriptionsResponse) =>
      setSubscribedGroups(subscriptionsResponse.data)
    );
  };

  useEffect(() => {
    response.data?.results && setGroups(response.data.results);

    response.data?.previous === null
      ? setIsPreviousDisabled(true)
      : setIsPreviousDisabled(false);

    response.data?.next === null
      ? setIsNextDisabled(true)
      : setIsNextDisabled(false);

    updateUserSubscriptions();
  }, [response]);

  const searchByCategory = (searchedTerm) => {
    setCategory(searchedTerm);
  };

  const addToPage = () => {
    setPage(page + 1);
  };

  const subToPage = () => {
    setPage(page - 1);
  };

  return (
    <GroupsContext.Provider
      value={{
        groups,
        subscribedGroups,
        searchByCategory,
        isPreviousDisabled,
        isNextDisabled,
        addToPage,
        subToPage,
        updateUserSubscriptions,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
