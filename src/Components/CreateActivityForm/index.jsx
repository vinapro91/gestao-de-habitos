import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import Button from "../../Components/Button";
import { TextField } from "@mui/material";
import { postActivities } from "../../Services/api";
import { Container } from "./style";

const CreateActivityForm = ({ id, updateActivity, length, setLength }) => {
  const [status, setStatus] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    console.log(status);
  }, [status]);

  const handleNewActivity = ({
    title,
    realization_time = new Date(),
    group = id,
  }) => {
    postActivities({
      title,
      realization_time,
      group,
    }).then((response) => setStatus(response));

    updateActivity();
    setLength(length + 1);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleNewActivity)}>
        <TextField
          label="Atividade"
          {...register("title")}
          size="small"
          error={!!errors.name}
          helperText={errors.title?.message}
        />
        <Button formActivity type="submit">
          +
        </Button>
      </form>
    </Container>
  );
};

export default CreateActivityForm;
