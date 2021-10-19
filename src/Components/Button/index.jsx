import { ButtonStyled } from "./styles";
const Button = ({
  children,
  registerSchema = false,
  homePage = false,
  ...rest
}) => {
  return (
    <ButtonStyled
      homePage={homePage}
      registerSchema={registerSchema}
      type="button"
      {...rest}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
