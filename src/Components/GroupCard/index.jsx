import { Card } from "./styles";

const GroupCard = ({ group }) => {
  return (
    <Card>
      <p>Nome do grupo : {group.name}</p>
      <p>Categoria : {group.category}</p>
      <p>Descrição :{group.description}</p>
      <p>Quantidade de membros : {group.users_on_group.length}</p>
    </Card>
  );
};

export default GroupCard;
