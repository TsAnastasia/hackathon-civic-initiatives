import { Link } from "react-router-dom";
import { AppRoutes } from "../../router/routes";
import AppLogo from "../AppLogo/AppLogo";
import scss from "./appHeader.module.scss";
import AppHeaderMenu from "./menu/AppHeaderMenu";
import AppHeaderSearch from "./search/AppHeaderSearch";

const AppHeader = () => {
  return (
    <header className={scss.header}>
      <AppHeaderMenu />
      <Link to={AppRoutes.HOME}>
        <AppLogo />
      </Link>
      <AppHeaderSearch />
    </header>
  );
};

export default AppHeader;
