import { useContext, useEffect, useState } from "react";
import { UserIdContext } from "../../Providers/User_id";
import { updateGroupCategory } from "../../Services/api";
import { toast } from "react-toastify";
import toastOptions from "../../Utils/toastOptions";
import { EdditButton } from "../../Pages/Group/style";

const GroupCreator = ({ group, updateGroup }) => {
  const { userId } = useContext(UserIdContext);

  const [isGroupCreator] = useState(group.creator.id === userId);

  const [category, setCategory] = useState(group.category);

  const [isCategoryEditable, setIsCategoryEditable] = useState(false);

  const [response, setResponse] = useState({});

  useEffect(() => {
    if (response.status === 200) {
      const message = "Categoria atualizada com sucesso!";
      toast.success(message, toastOptions);
      updateGroup();
    } else if (response.status >= 400) {
      const message = response.data.message;
      toast.error(message, toastOptions);
    }

    // eslint-disable-next-line
  }, [response]);

  const handleCategoryInputChange = (event) => {
    const { value } = event.target;

    setCategory(value);
  };

  const handleUpdateGroupCategory = () => {
    if (category.trim() !== "") {
      updateGroupCategory(group.id, { category }).then(
        (updateCategoryResponse) => setResponse(updateCategoryResponse)
      );

      handleCategoryEditable();
    }
  };

  const handleCancelUpdate = () => {
    setCategory(group.category);
    handleCategoryEditable();
  };

  const handleCategoryEditable = () => {
    setIsCategoryEditable(!isCategoryEditable);
  };

  return (
    <div>
      {isGroupCreator ? (
        <>
          {isCategoryEditable ? (
            <>
              <input
                value={category}
                onChange={(event) => handleCategoryInputChange(event)}
              />
              <button onClick={handleUpdateGroupCategory}>Salvar</button>
              <button onClick={handleCancelUpdate}>Cancelar</button>
            </>
          ) : (
            <>
              <span>{group.category}</span>
              <EdditButton onClick={handleCategoryEditable}>Editar</EdditButton>
            </>
          )}
        </>
      ) : (
        <span>{group.category}</span>
      )}
    </div>
  );
};

export default GroupCreator;
