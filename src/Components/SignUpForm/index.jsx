import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import api from "../../Services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState({});

  const history = useHistory();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const options = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  const handleSignUp = ({ username, email, password }) => {
    api
      .post("/users/", { username, email, password })
      .then((apiResponse) => setResponse(apiResponse))
      .catch((apiError) => setError(apiError.response));
  };

  useEffect(() => {
    if (response.status === 201) {
      toast.success("Cadastro realizado com sucesso!", options);

      history.push("/login");
    }

    // eslint-disable-next-line
  }, [response]);

  useEffect(() => {
    if (error.status >= 400) {
      const message = "Já existe um usuário com este username!";
      toast.error(message, options);

      setValue("password", "");
      setValue("passwordConfirmation", "");
    }

    // eslint-disable-next-line
  }, [error]);

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
        Já é cadastrado? <Link to="/login">Faça o login.</Link>
      </p>
    </>
  );
};

export default SignUpForm;
