import { lazy } from "react";
import routePathConst from "../const/routePathConst";
import { IRoutes } from "../types/routes";

export const privateRoutes: IRoutes[] = [
  {
    path: routePathConst.USER_PAGE,
    label: "Users",
    exact: true,
    component: lazy(() => import("../pages/UsersPage")),
    restricted: false,
  },
  {
    path: routePathConst.TODO_PAGE,
    label: "Todos",
    exact: true,
    component: lazy(() => import("../pages/TodosPage")),
    restricted: false,
  },
];
