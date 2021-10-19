import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    if (searchTerm.trim().length >= 3) {
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
        {groups.length > 0 ? (
          groups.map((group) => (
            <Link to={`/groups/${group.id}`} key={group.id}>
              <GroupCard group={group} />
            </Link>
          ))
        ) : (
          <h2>{`Não foi possível localizar grupos com a categoria "${searchTerm}"`}</h2>
        )}
      </div>
    </>
  );
};

export default Groups;
