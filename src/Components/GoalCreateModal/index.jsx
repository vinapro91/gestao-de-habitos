import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { addGoal } from "../../Services/api";
import { FormControl, TextField } from "./styles";
import { toast } from "react-toastify";
import toastOptions from "../../Utils/toastOptions";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const GoalCreateModal = ({ groupId, open, handleToggleModal, updateGroup }) => {
  const [response, setResponse] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (response.status === 201) {
      const message = "Meta adicionada com sucesso!";
      toast.success(message, toastOptions);

      updateGroup();
    } else if (response.status >= 400) {
      const message = "Erro desconhecido";
      toast.error(message, toastOptions);
    }

    // eslint-disable-next-line
  }, [response]);

  const handleAddGoal = (data) => {
    const goal = {
      ...data,
      how_much_achieved: 0,
      group: groupId,
    };

    addGoal(goal).then((goalResponse) => setResponse(goalResponse));

    reset();
    handleToggleModal();
  };

  const handleCancelGoal = () => {
    reset();
    handleToggleModal();
  };

  return (
    <Dialog open={open} onClose={handleCancelGoal}>
      <form onSubmit={handleSubmit(handleAddGoal)}>
        <DialogTitle>{"Crie uma nova meta:"}</DialogTitle>

        <DialogContent>
          <TextField
            label="Qual será a sua meta?"
            size="small"
            fullWidth
            {...register("title")}
          />
          {errors.title && errors.title.message}

          <FormControl fullWidth>
            <InputLabel id="difficulty-select">
              Qual é a dificuldade da meta?
            </InputLabel>
            <Select
              size="small"
              labelId="difficulty-select"
              label="Qual é a dificuldade da meta?"
              defaultValue="fácil"
              {...register("difficulty")}
            >
              <MenuItem value="fácil">fácil</MenuItem>
              <MenuItem value="moderado">moderado</MenuItem>
              <MenuItem value="difícil">difícil</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button type="submit" autoFocus>
            Salvar
          </Button>
          <Button onClick={handleCancelGoal}>Cancelar</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default GoalCreateModal;
