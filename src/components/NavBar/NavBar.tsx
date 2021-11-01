import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

import { privateRoutes } from "../../routes/privateRoutes";
import { publicRoutes } from "../../routes/publicRoutes";

const NavBar: React.FC = () => {
  const user = false;

  return (
    <header>
      <nav className={styles.navMenu}>
        {user
          ? privateRoutes.map(({ path, label }) => (
              <NavLink key={path} className={styles.navLink} to={path}>
                {label}
              </NavLink>
            ))
          : publicRoutes.map(({ path, label }) => (
              <NavLink key={path} className={styles.navLink} to={path}>
                {label}
              </NavLink>
            ))}

        <div className={styles.dot}></div>
      </nav>
    </header>
  );
};

export default NavBar;
