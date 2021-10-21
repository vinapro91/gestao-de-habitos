import SignUpForm from "../../Components/SignUpForm";
import { BoxForm, FullScreen } from "./style";

const SignUp = () => {
  return (
    <FullScreen>
      <BoxForm>
        <h1>Cadastre-se</h1>
        <SignUpForm />
      </BoxForm>
    </FullScreen>
  );
};

export default SignUp;
