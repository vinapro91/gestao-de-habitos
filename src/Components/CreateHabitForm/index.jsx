import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import Button from "../../Components/Button";
import { useHistory } from "react-router";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import toastOptions from "../../Utils/toastOptions";
import "react-toastify/dist/ReactToastify.css";
import { postHabits } from "../../Services/api";
import { UserIdContext } from "../../Providers/User_id";
import { HabitsContext } from "../../Providers/Habits";

const CreateHabitForm = () => {
  const [status, setStatus] = useState({});
  const history = useHistory();
  const { userId } = useContext(UserIdContext);
  const { updateUserHabits } = useContext(HabitsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (status.status === 201) {
      const message = "Atividade criada com sucesso!";
      toast.success(message, toastOptions);

      history.push("/profile");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const handleCreateHabit = ({
    title,
    difficulty,
    category,
    frequency,
    achieved = false,
    how_much_achieved = 0,
    user = userId,
  }) => {
    postHabits({
      title,
      difficulty,
      category,
      frequency,
      achieved,
      how_much_achieved,
      user,
    }).then((createReponse) => {
      setStatus(createReponse);
      updateUserHabits();
    });
  };

  return (
    <form onSubmit={handleSubmit(handleCreateHabit)}>
      <TextField
        label="Titulo"
        {...register("title")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="Categoria"
        {...register("category")}
        error={!!errors.description}
        helperText={errors.description?.message}
      />
      <TextField
        label="Dificuldade"
        {...register("difficulty")}
        error={!!errors.category}
        helperText={errors.category?.message}
      />
      <TextField
        label="Frenquencia"
        {...register("frequency")}
        error={!!errors.category}
        helperText={errors.category?.message}
      />

      <Button type="submit">Criar</Button>
    </form>
  );
};

export default CreateHabitForm;
