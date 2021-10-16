import { createContext, useState } from "react";

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@Habits:Token")) || ""
  );
  const addToken = (access) => {
    localStorage.setItem("@Habits:Token", JSON.stringify(access));
    setToken(access);
  };

  return (
    <TokenContext.Provider value={{ token, addToken }}>
      {children}
    </TokenContext.Provider>
  );
};
