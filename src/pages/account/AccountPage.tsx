import cl from "classnames";
import { Link } from "react-router-dom";
import { goToPage } from "../../router/routes";
import AccountForm from "./form/AccountForm";
import scss from "./accountPage.module.scss";
import AccountAvatar from "./avatar/AccountAvatar";
import { useDocTitle } from "../../hooks/useDocTitle";

const AccountPage = () => {
  useDocTitle("Личный кабинет");

  return (
    <>
      <section className={scss.section}>
        <h1 className={scss.title}>Личный кабинет</h1>
        <div className={scss.container}>
          <Link
            to={goToPage.settings}
            className={cl(scss.link, scss.settings)}
          />
          <AccountAvatar />
          <Link
            to={goToPage.notification}
            className={cl(scss.link, scss.notification)}
          />
        </div>
      </section>
      <section className={scss.section}>
        <AccountForm />
      </section>
    </>
  );
};

export default AccountPage;
