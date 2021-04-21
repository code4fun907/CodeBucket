import Home from "../pages/Home";
import Layout from "./ui/Layout";
import SignupForm from "./Auth/SignupForm";
import SigninForm from "./Auth/SigninForm";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/auth/signup">
          <SignupForm />
        </Route>
        <Route exact path="/auth/signin">
          <SigninForm />
        </Route>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
