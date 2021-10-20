import { ButtonStyled } from "./styles";
const Button = ({
  children,
  registerSchema = false,
  homePage = false,
  formActivity = false,
  ...rest
}) => {
  return (
    <ButtonStyled
      homePage={homePage}
      registerSchema={registerSchema}
      formActivity={formActivity}
      type="button"
      {...rest}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
