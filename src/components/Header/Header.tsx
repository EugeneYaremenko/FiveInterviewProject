import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header>
      <nav className={styles.navMenu}>
        <NavLink to="/" className={styles.navLink} exact>
          Home
        </NavLink>
        <NavLink to="/users" className={styles.navLink} exact>
          Users
        </NavLink>
        <NavLink to="/todos" className={styles.navLink} exact>
          ToDos
        </NavLink>
        <div className={styles.dot}></div>
      </nav>
    </header>
  );
};

export default Header;
