import { Switch, Route } from "react-router";
import Groups from "../Pages/Groups";
import Home from "../Pages/Home/Index";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import SignUp from "../Pages/SignUp";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/groups">
        <Groups />
      </Route>
    </Switch>
  );
};

export default Routes;
