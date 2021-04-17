import Home from "../pages/Home";
import Layout from "./ui/Layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
