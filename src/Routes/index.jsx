import { Switch } from "react-router-dom";
import Route from "./route";
import Group from "../Pages/Group";
import Groups from "../Pages/Groups";
import Home from "../Pages/Home/Index";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import SignUp from "../Pages/SignUp";
import CreateGroup from "../Pages/CreateGroup";

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

      <Route path="/profile" isPrivate>
        <Profile />
      </Route>

      <Route path="/groups/:id" isPrivate>
        <Group />
      </Route>

      <Route path="/groups" isPrivate>
        <Groups />
      </Route>
      <Route path="/createGroup" isPrivate>
        <CreateGroup />
      </Route>
    </Switch>
  );
};

export default Routes;
