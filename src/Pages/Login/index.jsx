import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../Services/api";
import { useContext } from "react";
import jwt_decode from "jwt-decode";
import { BoxForm, FullScreen } from "./style.js";
import Button from "../../Components/Button";
import { TextField } from "@mui/material";
import { TokenContext } from "../../Providers/Token";
import { useHistory } from "react-router";
import { UserIdContext } from "../../Providers/User_id";
const Login = () => {
  const { addToken } = useContext(TokenContext);
  const { addUserId } = useContext(UserIdContext);

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
  // Tratar Erros
  console.log(errors);
  const handleLogin = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        addToken(response.data.access);
        const decoded = jwt_decode(response.data.access);
        addUserId(decoded.user_id);
        history.push("/Profile");
      })
      .catch((err) => console.log(err));
  };

  return (
    <FullScreen>
      <BoxForm className="BoxForm">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <TextField
            fullWidth
            label="Nome do Usuário"
            variant="outlined"
            color="secondary"
            {...register("username")}
          />
          <TextField
            fullWidth
            type="password"
            label="Senha"
            variant="outlined"
            color="secondary"
            {...register("password")}
          />

          <Button type="submit">Entrar</Button>
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
