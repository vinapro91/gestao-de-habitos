import { createContext, useContext, useEffect, useState } from "react";
import { getHabits } from "../../Services/api";
import { TokenContext } from "../Token";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const { token } = useContext(TokenContext);
  useEffect(() => {
    updateUserHabits();
  }, [token]);

  const updateUserHabits = () => {
    getHabits().then((response) => setHabits(response.data));
  };

  return (
    <HabitsContext.Provider value={{ habits }}>
      {children}
    </HabitsContext.Provider>
  );
};
