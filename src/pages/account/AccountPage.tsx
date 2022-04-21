import { Link } from "react-router-dom";
import { goToPage } from "../../utils/routes";
import AccountForm from "./form/AccountForm";

const AccountPage = () => {
  return (
    <>
      <section>
        <h1>Личный кабинет</h1>
        <div>
          <Link to={goToPage.settings}>set</Link>
          <button>Avatar</button>
          <Link to={goToPage.notification}>not</Link>
        </div>
      </section>
      <section>
        <AccountForm />
      </section>
    </>
  );
};

export default AccountPage;
