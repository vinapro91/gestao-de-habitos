import { useContext } from "react";
import { GroupsContext } from "../../Providers/Groups";
import GroupCard from "../../Components/GroupCard";

const Groups = () => {
  const { groups, addToPage, subToPage } = useContext(GroupsContext);

  return (
    <>
      <h1>Groups</h1>
      <button onClick={() => subToPage()}>Voltar</button>
      <button onClick={() => addToPage()}>avançar</button>
      <div>
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </>
  );
};

export default Groups;
