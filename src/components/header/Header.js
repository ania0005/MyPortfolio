import styles from "./Header.module.css";
import resume from "./lebenslauf1.pdf";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.headerTitle}>
          <strong>
            <em>Tania Samoilenko</em>
          </strong>
          <br />a full stack / frontend developer
        </h1>
        <div className={styles.headerText}>
          <p>with passion for learning and creating.</p>
        </div>
        <a href={resume} className={styles.btn}>Download CV</a>
      </div>
    </header>
  );
};

export default Header;

