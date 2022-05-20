import { Link } from "react-router-dom";
import { AppRoutes } from "../../router/routes";
import Logo from "../Logo/Logo";
import scss from "./header.module.scss";
import HeaderMenu from "./menu/HeaderMenu";
import HeaderSearch from "./search/HeaderSearch";

const Header = () => {
  return (
    <header className={scss.header}>
      <HeaderMenu />
      <Link to={AppRoutes.HOME}>
        <Logo />
      </Link>
      <HeaderSearch />
    </header>
  );
};

export default Header;
