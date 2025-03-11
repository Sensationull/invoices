import styles from "./InvoiceNavBar.module.css";
import MoonIcon from "./MoonIcon";
import Logo from "./logo";

const InvoiceNavBar = () => {
  return (
    <nav className={styles.container}>
      <span className={styles.iconContainer}>
        <span className={styles.logoContainer}>
          <Logo />
        </span>
        <MoonIcon />
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
