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
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const CreateHabitForm = ({ open, handleToggleModal }) => {
  const [status, setStatus] = useState({});
  const history = useHistory();
  const { userId } = useContext(UserIdContext);
  const { updateUserHabits } = useContext(HabitsContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (status.status === 201) {
      const message = "Hábito criado com sucesso!";
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

  const handleCancelHabit = () => {
    reset();
    handleToggleModal();
  };
  return (
    <Dialog
      open={open}
      onClose={handleCancelHabit}
      maxWidth="xs"
      sx={{
        textAlign: "center",
      }}
    >
      <form onSubmit={handleSubmit(handleCreateHabit)}>
        <DialogTitle>{"Crie um novo hábito:"}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Titulo"
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
          />
          <TextField
            margin="dense"
            label="Categoria"
            {...register("category")}
            error={!!errors.category}
            helperText={errors.category?.message}
          />
          <TextField
            margin="dense"
            label="Dificuldade"
            {...register("difficulty")}
            error={!!errors.difficulty}
            helperText={errors.difficulty?.message}
          />
          <TextField
            margin="dense"
            label="Frenquencia"
            {...register("frequency")}
            error={!!errors.frequency}
            helperText={errors.frequency?.message}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button type="submit">Criar</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CreateHabitForm;
