import { createContext, useContext, useEffect, useState } from "react";
import { deletHabit, getHabits } from "../../Services/api";
import { UserIdContext } from "../User_id";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const { userId } = useContext(UserIdContext);

  const updateUserHabits = () => {
    getHabits().then((response) => setHabits(response.data));
  };
  const deletUserHabit = (id) => {
    deletHabit(id);
    updateUserHabits();
  };
  useEffect(() => {
    userId > 0 && updateUserHabits();
  }, [userId]);

  return (
    <HabitsContext.Provider
      value={{ habits, updateUserHabits, deletUserHabit }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
