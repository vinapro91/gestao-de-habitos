
import Routes from "./Routes";
import GlobalStyles from "./styles/style";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Routes />
      <ToastContainer />
    </div>
  );
}

export default App;
