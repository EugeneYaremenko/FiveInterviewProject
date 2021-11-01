import React from "react";
import styles from "./Layout.module.css";

import NavBar from "../NavBar";

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
