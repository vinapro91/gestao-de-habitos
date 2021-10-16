import { GroupsProvider } from "./Groups";
import { TokenProvider } from "./Token";
import { UserIdProvider } from "./User_id";

const Provider = ({ children }) => {
  return (
    <GroupsProvider>
      <UserIdProvider>
        <TokenProvider>{children}</TokenProvider>
      </UserIdProvider>
    </GroupsProvider>
  );
};

export default Provider;
