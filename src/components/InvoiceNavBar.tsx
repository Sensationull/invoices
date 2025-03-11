import styles from "./InvoiceNavBar.module.css";
import MoonIcon from "./MoonIcon";
import Logo from "./logo";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import SunIcon from "./SunIcon";
const InvoiceNavBar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <nav className={styles.container}>
      <span className={styles.iconContainer}>
        <span className={styles.logoContainer}>
          <Logo />
        </span>
        <a href="#" className={styles.darkModeButton} onClick={toggleDarkMode}>
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </a>
      </span>
      <span className={styles.avatarContainer}>
        <img
          src="src/assets/image-avatar.jpg"
          alt="avatar"
          className={styles.avatar}
        />
      </span>
    </nav>
  );
};

export default InvoiceNavBar;
