import { useContext, useEffect, useState } from "react";
import { GroupsContext } from "../../Providers/Groups";
import GroupCard from "../../Components/GroupCard";
import { useHistory } from "react-router";

const Groups = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { groups, searchByCategory, addToPage, subToPage } =
    useContext(GroupsContext);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const history = useHistory();

  useEffect(() => {
    if (searchTerm.length >= 3) {
      searchByCategory(searchTerm);
    } else {
      searchByCategory("");
    }

    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <>
      <h1>Groups</h1>

      <div>
        <input
          placeholder="Pesquise grupos por categoria"
          value={searchTerm}
          onChange={(event) => handleSearchTermChange(event)}
        />
      </div>

      <button onClick={() => subToPage()}>Voltar</button>
      <button onClick={() => addToPage()}>avançar</button>
      <button onClick={() => history.push("/createGroup")}>Criar grupo</button>
      <div>
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </>
  );
};

export default Groups;
