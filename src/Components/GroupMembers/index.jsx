import { BoxDetails } from "./styles";

const GroupMembers = ({ group }) => {
  return (
    <details>
      <summary>Membros</summary>
      <BoxDetails>
        <ul>
          {group.users_on_group.length > 0 ? (
            group.users_on_group.map((user, index) => (
              <li key={index}>{`${user.username} (${user.email})`}</li>
            ))
          ) : (
            <li>Não há membros neste grupo.</li>
          )}
        </ul>
      </BoxDetails>
    </details>
  );
};

export default GroupMembers;
