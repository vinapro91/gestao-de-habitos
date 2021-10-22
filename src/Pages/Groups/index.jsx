import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GroupsContext } from "../../Providers/Groups";
import GroupCard from "../../Components/GroupCard";
import CreateGroupForm from "../../Components/CreateGroupForm";

import { ButtonNextPage, FullScreenGroups, ShowGroupsCards } from "./style";
import { TextField } from "@mui/material";

import { FullScreenGroups, ShowGroupsCards } from "./style";


const Groups = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);

  const {
    groups,
    searchByCategory,
    isPreviousDisabled,
    isNextDisabled,
    addToPage,
    subToPage,
  } = useContext(GroupsContext);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm.trim().length >= 3) {
      searchByCategory(searchTerm);
    } else {
      searchByCategory("");
    }

    // eslint-disable-next-line
  }, [searchTerm]);

  const handleToggleModal = () => {
    setOpen(!open);
  };

  return (
    <FullScreenGroups>
      <div className="TitleGroups">
        <h1>Groups</h1>

        <div>
          <TextField
            size="small"
            placeholder="Pesquise grupos por categoria"
            value={searchTerm}
            onChange={(event) => handleSearchTermChange(event)}
          />
        </div>

      </div>

      <div className="BoxButtonsPage">
        <ButtonNextPage
          disabled={isPreviousDisabled}
          onClick={() => subToPage()}
        >
          {"<"}
        </ButtonNextPage>

        <ButtonNextPage onClick={handleToggleModal} large={true}>
          Criar grupo
        </ButtonNextPage>

        <ButtonNextPage disabled={isNextDisabled} onClick={() => addToPage()}>
          {">"}
        </ButtonNextPage>

      </div>


      <div>
        <button onClick={handleToggleModal}>Criar grupo</button>
      </div>
      <div className="listCard">
        <ShowGroupsCards>
          {groups.length > 0 ? (
            groups.map((group) => (
              <Link to={`/groups/${group.id}`} key={group.id}>
                <GroupCard group={group} />
              </Link>
            ))
          ) : (
            <h2>{`Não foi possível localizar grupos com a categoria "${searchTerm}"`}</h2>
          )}
        </ShowGroupsCards>
      </div>

      <div className="listCard">
        <ShowGroupsCards>
          {groups.length > 0 ? (
            groups.map((group) => (
              <Link to={`/groups/${group.id}`} key={group.id}>
                <GroupCard group={group} />
              </Link>
            ))
          ) : (
            <h2>{`Não foi possível localizar grupos com a categoria "${searchTerm}"`}</h2>
          )}
        </ShowGroupsCards>
      </div>

      <div className="ButtonBack">
        <ButtonNextPage onClick={handleToggleModal} large={true}>
          voltar
        </ButtonNextPage>
      </div>
      <CreateGroupForm open={open} handleToggleModal={handleToggleModal} />
    </FullScreenGroups>
  );
};

export default Groups;
