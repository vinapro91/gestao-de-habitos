import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import Button from "../../Components/Button";
import { useHistory } from "react-router";
import { createGroup } from "../../Services/api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import toastOptions from "../../Utils/toastOptions";
import "react-toastify/dist/ReactToastify.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const CreateGroupForm = ({ open, handleToggleModal }) => {
  const [status, setStatus] = useState({});
  const history = useHistory();

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
      const message = "Grupo criado com sucesso!";
      toast.success(message, toastOptions);

      history.push("/groups");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const handleCreateGroup = ({ name, description, category }) => {
    createGroup({ name, description, category }).then((createReponse) =>
      setStatus(createReponse)
    );
  };

  const handleCancelActivity = () => {
    reset();
    handleToggleModal();
  };

  return (
    <Dialog
      open={open}
      onClose={handleCancelActivity}
      maxWidth="xs"
      sx={{
        textAlign: "center",
      }}
    >
      <form onSubmit={handleSubmit(handleCreateGroup)}>
        <DialogTitle>{"Crie um novo grupo:"}</DialogTitle>

        <DialogContent>
          <TextField
            label="Nome do grupo"
            {...register("name")}
            sizer="small"
            margin="dense"
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            label="Descrição do grupo"
            {...register("description")}
            sizer="small"
            margin="dense"
            error={!!errors.description}
            helperText={errors.description?.message}
          />
          <TextField
            label="Categoria do grupo"
            {...register("category")}
            sizer="small"
            margin="dense"
            error={!!errors.category}
            helperText={errors.category?.message}
          />
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center" }}>
          <Button type="submit">Criar</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CreateGroupForm;
