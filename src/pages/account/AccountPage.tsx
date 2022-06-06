import cl from "classnames";
import { Link } from "react-router-dom";
import { goToPage } from "../../router/routes";
import AccountForm from "./form/AccountForm";
import scss from "./accountPage.module.scss";
import AccountAvatar from "./avatar/AccountAvatar";
import { useAppSelector } from "../../hooks/redux";
import PageTitle from "../../components/PageTitle/PageTitle";

const AccountPage = () => {
  const { notifications_count } = useAppSelector((state) => state.user.data);

  return (
    <>
      <section className={scss.section}>
        <PageTitle className={scss.title}>Личный кабинет</PageTitle>
        <div className={scss.container}>
          <Link
            to={goToPage.settings}
            className={cl(scss.link, scss.settings)}
          />
          <AccountAvatar />
          <Link
            to={goToPage.notification}
            className={cl(
              scss.link,
              scss.notification,
              notifications_count && scss.active
            )}
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
