import cl from "classnames";
import { Link } from "react-router-dom";
import { goToPage } from "../../utils/routes";
import AccountForm from "./form/AccountForm";
import styles from "./accountPage.module.scss";
import AccountAvatar from "./avatar/AccountAvatar";
import { useDocTitle } from "../../hooks/useDocTitle";

const AccountPage = () => {
  useDocTitle("Личный кабинет");

  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.title}>Личный кабинет</h1>
        <div className={styles.container}>
          <Link
            to={goToPage.settings}
            className={cl(styles.link, styles.settings)}
          />
          <AccountAvatar />
          <Link
            to={goToPage.notification}
            className={cl(styles.link, styles.notification)}
          />
        </div>
      </section>
      <section className={styles.section}>
        <AccountForm />
      </section>
    </>
  );
};

export default AccountPage;
