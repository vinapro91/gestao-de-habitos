import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../Services/api";
import { useContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { BoxForm, ButtonStyled, FullScreen } from "./style.js";
import { TextField } from "@mui/material";
import { TokenContext } from "../../Providers/Token";
import { useHistory } from "react-router";
import { UserIdContext } from "../../Providers/User_Id";
const Login = () => {
  const { token, setToken } = useContext(TokenContext);
  const { userId, setUserId } = useContext(UserIdContext);
  console.log(userId);
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
  const history = useHistory();

  const onSubmitFunction = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const { access } = response.data;
        localStorage.setItem("@Habits:Token", JSON.stringify(access));
        const decoded = jwt_decode(access);
        setUserId(decoded.user_id);
        setToken(access);
        history.push("/Profile");
      })
      .catch((err) => console.log(err));
  };

  return (
    <FullScreen>
      <BoxForm className="BoxForm">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <TextField
            fullWidth
            label="Nome do Usuário"
            variant="standard"
            color="secondary"
            {...register("username")}
          />
          <TextField
            fullWidth
            type="password"
            label="Senha"
            variant="standard"
            color="secondary"
            {...register("password")}
          />

          <ButtonStyled type="submit">Entrar</ButtonStyled>
        </form>
        <p>
          Já possui cadastro?{" "}
          <span>
            <a>Cadastre-se</a>
          </span>
        </p>
      </BoxForm>
    </FullScreen>
  );
};
export default Login;
