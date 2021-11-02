import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Context } from "../../index";
import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { privateRoutes } from "../../routes/privateRoutes";
import { publicRoutes } from "../../routes/publicRoutes";

const NavBar: React.FC = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

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

        {user && (
          <NavLink
            onClick={() => auth.signOut()}
            className={styles.navLink}
            to="/"
          >
            Logout
          </NavLink>
        )}
        <div className={styles.dot}></div>
      </nav>
    </header>
  );
};

export default NavBar;
