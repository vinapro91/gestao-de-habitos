import { TextField, FormControl } from "@mui/material";
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
  InputLabel,
  MenuItem,
  Select,
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
          <FormControl fullWidth margin="dense" sx={{ maxWidth: 230 }}>
            <InputLabel id="difficulty-select">
              Qual é a dificuldade do Hábito?
            </InputLabel>
            <Select
              labelId="difficulty-select"
              label="Qual é a dificuldade da meta?"
              defaultValue="fácil"
              margin="dense"
              {...register("difficulty")}
            >
              <MenuItem value="fácil">Fácil</MenuItem>
              <MenuItem value="moderado">Moderado</MenuItem>
              <MenuItem value="difícil">Difícil</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="dense" sx={{ maxWidth: 230 }}>
            <InputLabel id="frequency-select">Qual a frequência?</InputLabel>
            <Select
              labelId="frequency-select"
              label="Qual a frequência?"
              defaultValue="diária"
              margin="dense"
              {...register("frequency")}
            >
              <MenuItem value="diária">Diária</MenuItem>
              <MenuItem value="semanal">Semanal</MenuItem>
              <MenuItem value="mensal">Mensal</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button type="submit">Criar</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CreateHabitForm;
