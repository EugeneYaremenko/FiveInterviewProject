import { lazy } from "react";
import routePathConst from "../const/routePathConst";
import { IRoutes } from "../types/routes";

export const publicRoutes: IRoutes[] = [
  {
    path: routePathConst.HOME_PAGE,
    label: "Home",
    exact: true,
    component: lazy(() => import("../pages/HomePage")),
    restricted: false,
  },
  {
    path: routePathConst.EXAMPLE_PAGE,
    label: "Examples",
    exact: true,
    component: lazy(() => import("../pages/ExamplePage")),
    restricted: false,
  },
  {
    path: routePathConst.LOGIN_PAGE,
    label: "Login",
    exact: true,
    component: lazy(() => import("../pages/LoginPage")),
    restricted: false,
  },
];
