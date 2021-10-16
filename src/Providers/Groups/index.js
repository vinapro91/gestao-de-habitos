import { createContext, useEffect, useState } from "react";
import api from "../../Services/api";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [page, setpage] = useState(1);
  useEffect(() => {
    api.get(`/groups/?page=${page}`).then((response) => {
      setGroups(response.data.results);
    });
  }, [page]);

  const addToPage = () => {
    setpage(page + 1);
  };
  const subToPage = () => {
    if (page > 1) {
      setpage(page - 1);
    }
  };
  return (
    <GroupsContext.Provider value={{ groups, addToPage, subToPage }}>
      {children}
    </GroupsContext.Provider>
  );
};
