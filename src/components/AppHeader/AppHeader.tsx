import { Link } from "react-router-dom";
import { AppRoutes } from "../../router/routes";
import AppLogo from "../AppLogo/AppLogo";
import styles from "./appHeader.module.scss";
import AppHeaderMenu from "./menu/AppHeaderMenu";
import AppHeaderSearch from "./search/AppHeaderSearch";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <AppHeaderMenu />
      <Link to={AppRoutes.HOME}>
        <AppLogo />
      </Link>
      <AppHeaderSearch />
    </header>
  );
};

export default AppHeader;
