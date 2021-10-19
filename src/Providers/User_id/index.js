import { createContext, useState } from "react";
export const UserIdContext = createContext();

export const UserIdProvider = ({ children }) => {
  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("@Habits:UserId")) || ""
  );

  const addUserId = (id) => {
    localStorage.setItem("@Habits:UserId", JSON.stringify(id));
    setUserId(id);
  };

  return (
    <UserIdContext.Provider value={{ userId, addUserId }}>
      {children}
    </UserIdContext.Provider>
  );
};
