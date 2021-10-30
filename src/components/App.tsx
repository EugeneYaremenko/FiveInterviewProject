import { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import PrivateRoutes from "../routes/PrivateRoutes";
// import PublicRoutes from "../routes/PublicRoutes";
// import routes from "../routes/routes";

import Loader from "react-loader-spinner";
import Layout from "./Layout";

import { HomePage } from "../pages/HomePage";
import { TodosPage } from "../pages/TodosPage";
import { UsersPage } from "../pages/UsersPage";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={Loader}>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/todos" component={TodosPage} exact />
            <Route path="/users" component={UsersPage} exact />
            <Redirect to="/" />
          </Switch>
          <ToastContainer />
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
