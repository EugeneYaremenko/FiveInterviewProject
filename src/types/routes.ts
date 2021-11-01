export interface IRoutes {
  path: string;
  label: string;
  exact: boolean;
  component: React.LazyExoticComponent<React.FC<{}>>;
  restricted: boolean;
}
