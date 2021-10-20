import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { addActivity } from "../../Services/api";
import DateAdapter from "@mui/lab/AdapterDateFns";
import ptBRLocale from "date-fns/locale/pt-BR";
import { toast } from "react-toastify";
import toastOptions from "../../Utils/toastOptions";
import { TextField } from "./styles";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const ActivityCreateModal = ({
  groupId,
  open,
  handleToggleModal,
  updateGroup,
}) => {
  const [response, setResponse] = useState({});

  const [date, setDate] = useState(Date.now());

  const [today] = useState(Date.now());

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
      const message = "Atividade adicionada com sucesso!";
      toast.success(message, toastOptions);

      updateGroup();
    } else if (response.status >= 400) {
      const message = "Erro desconhecido";
      toast.error(message, toastOptions);
    }

    // eslint-disable-next-line
  }, [response]);

  const handleAddActivity = (data) => {
    const activity = {
      ...data,
      realization_time: date.toISOString(),
      group: groupId,
    };

    addActivity(activity).then((activityResponse) =>
      setResponse(activityResponse)
    );

    reset();
    handleToggleModal();
  };

  const handleCancelActivity = () => {
    reset();
    handleToggleModal();
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  return (
    <Dialog open={open} onClose={handleCancelActivity}>
      <form onSubmit={handleSubmit(handleAddActivity)}>
        <DialogTitle>{"Crie uma nova atividade:"}</DialogTitle>

        <DialogContent>
          <TextField
            label="Qual será a sua atividade?"
            size="small"
            fullWidth
            {...register("title")}
          />
          {errors.title && errors.title.message}

          <LocalizationProvider dateAdapter={DateAdapter} locale={ptBRLocale}>
            <DatePicker
              label="Qual é a data limite da atividade?"
              minDate={today}
              value={date}
              onChange={(newDate) => handleDateChange(newDate)}
              renderInput={(params) => (
                <TextField size="small" fullWidth {...params} />
              )}
            />
          </LocalizationProvider>
        </DialogContent>

        <DialogActions>
          <Button type="submit" autoFocus>
            Salvar
          </Button>
          <Button onClick={handleCancelActivity}>Cancelar</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ActivityCreateModal;
