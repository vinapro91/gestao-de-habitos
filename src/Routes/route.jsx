import { useContext } from "react";
import { Redirect, Route as ReactRoute } from "react-router-dom";
import { TokenContext } from "../Providers/Token";

const Route = ({ isPrivate = false, children, ...rest }) => {
  const { token } = useContext(TokenContext);

  const handleRender = () => {
    if (!!token && !isPrivate) {
      return <Redirect to={"/profile"} />;
    } else if (!token && isPrivate) {
      return <Redirect to={"/login"} />;
    } else {
      return children;
    }
  };

  return <ReactRoute {...rest} render={handleRender} />;
};

export default Route;
