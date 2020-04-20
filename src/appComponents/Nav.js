import React from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/flacar">
        <h3 className={styles.logo}>Flacar+</h3>
      </Link>

      <Link className={styles.link} to="/flacar/profile">
        <li className={styles.navListItem}>Profile</li>
      </Link>
    </nav>
  );
}

export default Nav;
