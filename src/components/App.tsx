import { Suspense, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import routePathConst from "../const/routePathConst";

import { privateRoutes } from "../routes/privateRoutes";
import { publicRoutes } from "../routes/publicRoutes";

import Loader from "react-loader-spinner";
import Layout from "./Layout";
import { Context } from "../index";

const App: React.FC = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={Loader}>
          {user ? (
            <Switch>
              {privateRoutes.map(({ path, component, exact }) => (
                <Route
                  key={path}
                  path={path}
                  component={component}
                  exact={exact}
                />
              ))}
              <Redirect to={routePathConst.USER_PAGE} />
            </Switch>
          ) : (
            <Switch>
              {publicRoutes.map(({ path, component, exact }) => (
                <Route
                  key={path}
                  path={path}
                  component={component}
                  exact={exact}
                />
              ))}
              <Redirect to={routePathConst.LOGIN_PAGE} />
            </Switch>
          )}

          <ToastContainer />
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
