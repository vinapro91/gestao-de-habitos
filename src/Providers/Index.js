import { GroupsProvider } from "./Groups";
import { HabitsProvider } from "./Habits";
import { TokenProvider } from "./Token";
import { UserIdProvider } from "./User_id";

const Provider = ({ children }) => {
  return (
    <GroupsProvider>
      <UserIdProvider>
        <TokenProvider>
          <HabitsProvider>{children}</HabitsProvider>
        </TokenProvider>
      </UserIdProvider>
    </GroupsProvider>
  );
};

export default Provider;
