import { AUTHOR_LINK } from "../../utils/constants";
import styles from "./appFooter.module.scss";

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy;{" "}
        <a
          className={styles.link}
          href={AUTHOR_LINK}
          rel="noreferrer"
          target="_blank"
        >
          Ana Ts,
        </a>
        {` ${new Date().getFullYear()}`}
      </p>
    </footer>
  );
};

export default AppFooter;
