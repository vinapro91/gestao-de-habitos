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
import { Link } from "react-router-dom";
import { HabitsContext } from "../../Providers/Habits";
const Login = () => {
  const { addToken } = useContext(TokenContext);
  const { addUserId } = useContext(UserIdContext);
  const { updateUserHabits } = useContext(HabitsContext);

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

  const handleLogin = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        addToken(response.data.access);
        const decoded = jwt_decode(response.data.access);
        addUserId(decoded.user_id);
        updateUserHabits();
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
            label="Nome do Usuário"
            variant="outlined"
            color="primary"
            {...register("username")}
          />
          <TextField
            type="password"
            label="Senha"
            variant="outlined"
            color="primary"
            {...register("password")}
          />

          <Button type="submit">Entrar</Button>
        </form>
        <p>
          Já possui cadastro?{" "}
          <span>
            <Link to="/signup">Cadastre-se</Link>
          </span>
        </p>
      </BoxForm>
    </FullScreen>
  );
};
export default Login;
