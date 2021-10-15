import { useHistory } from "react-router";
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
          <button onClick={() => handleNav("/login")}>Login</button>
          <button onClick={() => handleNav("/signup")}>Cadastra-se</button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
