import { Card } from "./styles";

const GroupCard = ({ group }) => {
  return (
    <Card>
      <h3>{group.name}</h3>
      <div className="positionCategory-menber">
        <p>{group.category}</p>

        <p>
          membros <span>{group.users_on_group.length}</span>
        </p>

      </div>
      <div className="descriptionGroup">
        <p>Descrição:</p>
        <p>{group.description}</p>
      </div>
    </Card>
  );
};

export default GroupCard;
