import { useHistory } from "react-router";
import Button from "../../Components/Button";
import { Container, Content } from "./styles";

const Home = () => {
  const history = useHistory();

  const handleNav = (path) => {
    history.push(path);
  };
  return (
    <Container>
      <Content>
        <h1>Gestão de Hábitos</h1>
        <p>Faça seu Login ou Registre-se conosco.</p>
        <div>
          <Button homePage onClick={() => handleNav("/login")}>
            Login
          </Button>
          <Button homePage registerSchema onClick={() => handleNav("/signup")}>
            Cadastra-se
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
