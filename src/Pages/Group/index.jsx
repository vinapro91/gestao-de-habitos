import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGroup } from "../../Services/api";
import GroupCategory from "../../Components/GroupCategory";
import GroupMembers from "../../Components/GroupMembers";
import GroupGoals from "../../Components/GroupGoals";
import GroupActivities from "../../Components/GroupActivities";
import GroupToggleSubscription from "../../Components/GroupToggleSubscription";
import {
  BodyGroup,
  Box,
  BoxButton,
  ButtonBack,
  ContainerGroup,
  HeaderGroup,
} from "./style";
import { useHistory } from "react-router-dom";

const Group = () => {
  const [group, setGroup] = useState({});
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    updateGroup();
    // eslint-disable-next-line
  }, [id]);

  const updateGroup = () => {
    getGroup(id).then((response) => {
      setGroup({ ...response.data });
      setIsLoading(false);
    });
  };
  const back = () => {
    history.push("/profile");
  };

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <ContainerGroup>
      <HeaderGroup>
        <h1>{group.name}</h1>
        <p>{group.description}</p>

        <GroupCategory group={group} updateGroup={updateGroup} />

        <p>{`Criador: ${group.creator.username} (${group.creator.email})`}</p>

        <ButtonBack onClick={back}>{"<"}</ButtonBack>
      </HeaderGroup>

      <BodyGroup>
        <Box>
          <GroupMembers group={group} />
        </Box>

        <Box>
          <GroupGoals group={group} updateGroup={updateGroup} />
        </Box>

        <Box>
          <GroupActivities group={group} updateGroup={updateGroup} />
        </Box>
      </BodyGroup>

      <BoxButton>
        <GroupToggleSubscription group={group} updateGroup={updateGroup} />
      </BoxButton>
    </ContainerGroup>
  );
};

export default Group;
