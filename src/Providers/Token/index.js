import { createContext, useEffect, useState } from "react";
import api from "../../Services/api";

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@Habits:Token")) || ""
  );

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};
