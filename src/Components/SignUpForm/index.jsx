import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { signUpUser } from "../../Services/api";
import { toast } from "react-toastify";
import toastOptions from "../../Utils/toastOptions";
import "react-toastify/dist/ReactToastify.css";

const SignUpForm = () => {
  const [response, setResponse] = useState({});

  const history = useHistory();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (response.status === 201) {
      const message = "Cadastro realizado com sucesso!";
      toast.success(message, toastOptions);

      history.push("/login");
    } else if (response.status >= 400) {
      const message =
        response.data.username[0] ===
        "A user with that username already exists."
          ? "Já existe uma conta com este nome de usuário!"
          : "Erro desconhecido";
      toast.error(message, toastOptions);

      setValue("password", "");
      setValue("passwordConfirmation", "");
    }

    // eslint-disable-next-line
  }, [response]);

  const handleSignUp = ({ username, email, password }) => {
    signUpUser({ username, email, password }).then((signUpResponse) =>
      setResponse(signUpResponse)
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <input {...register("username")} />
        {errors.username && <p>{errors.username.message}</p>}

        <input {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <input type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}

        <input type="password" {...register("passwordConfirmation")} />
        {errors.passwordConfirmation && (
          <p>{errors.passwordConfirmation.message}</p>
        )}

        <button type="submit">Cadastrar</button>
      </form>
      <p>
        Já possui cadastrado? <Link to="/login">Faça o login</Link>.
      </p>
    </>
  );
};

export default SignUpForm;
