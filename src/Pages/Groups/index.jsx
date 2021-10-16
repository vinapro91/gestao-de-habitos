import { useContext } from "react";
import { GroupsContext } from "../../Providers/Groups";

const Groups = () => {
  const { groups, addToPage, subToPage } = useContext(GroupsContext);

  return (
    <>
      <h1>Groups</h1>
      <button onClick={() => subToPage()}>Voltar</button>
      <button onClick={() => addToPage()}>avançar</button>
      <ul>
        {groups.map((item) => (
          <div>
            <p>Nome do grupo : {item.name}</p>
            <p>Descrição :{item.description}</p>
            <p>Quantidade de membros : {item.users_on_group.length}</p>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Groups;
