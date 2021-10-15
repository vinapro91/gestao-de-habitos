import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../Services/api";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import Button from "@mui/material/Button";
const Login = () => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const formSchema = yup.object().shape({
    username: yup.string().required("Nome de usuário obrigatório "),
    password: yup.string().required("Digite sua Senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const { access } = response.data;
        localStorage.setItem("@Habits:Token", JSON.stringify(access));
        const decoded = jwt_decode(access);
        setUserId(decoded.user_id);
        setToken(access);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmitFunction)}>
      <input placeholder="Nome de Usuário" {...register("username")} />
      <input placeholder="senha" {...register("password")} />
      <Button type="submit">Entrar</Button>
    </form>
  );
};
export default Login;
