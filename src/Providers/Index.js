import { GroupsProvider } from "./Groups";
import { TokenProvider } from "./Token";
import { UserIdProvider } from "./User_Id";

const Provider = ({ children }) => {
  return (
    <GroupsProvider>
      <TokenProvider>
        <UserIdProvider>{children}</UserIdProvider>
      </TokenProvider>
    </GroupsProvider>
  );
};

export default Provider;
